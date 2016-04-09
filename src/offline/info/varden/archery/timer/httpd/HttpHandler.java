package info.varden.archery.timer.httpd;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.DefaultHttpRequest;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.util.CharsetUtil;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

public class HttpHandler extends SimpleChannelInboundHandler<Object> {
	
	@Override
	public void channelReadComplete(ChannelHandlerContext ctx) {
		ctx.flush();
	}

	@Override
	protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
		System.out.println(msg.getClass().getName());
		if (msg instanceof DefaultHttpRequest) {
			System.out.println("Start");
			DefaultHttpRequest req = (DefaultHttpRequest) msg;
			if (!req.getDecoderResult().isSuccess()) {
	            sendHttpResponse(ctx, req, new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.BAD_REQUEST));
	            return;
	        }
			if (req.getMethod() != HttpMethod.GET) {
	            sendHttpResponse(ctx, req, new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.FORBIDDEN));
	            return;
	        }
			if ("/".equals(req.getUri())) {
				ByteBuf content = Unpooled.buffer(0);
	            FullHttpResponse res = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.FOUND, content);

	            res.headers().set("Location", "/index.html");

	            sendHttpResponse(ctx, req, res);
	            return;
	        }
			String uri = req.getUri();
			if (uri.contains("?")) {
				uri = uri.substring(0, uri.indexOf('?'));
			}
			System.out.println(req.getUri());
			InputStream is = HttpHandler.class.getResourceAsStream("/public_html" + uri);
			if (is == null) {
				FullHttpResponse res = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.NOT_FOUND);
	            sendHttpResponse(ctx, req, res);
	            return;
			} else {
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				int read;
				byte[] data = new byte[4096];
				while ((read = is.read(data, 0, data.length)) != -1) {
					baos.write(data, 0, read);
				}
				ByteBuf content = Unpooled.copiedBuffer(baos.toByteArray());
				FullHttpResponse res = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.OK, content);
				res.headers().set("Content-Type", ContentTypes.getHeaderFor(uri));
				res.headers().set("Content-Length", content.readableBytes());
				res.headers().set("Cache-Control", "no-cache, no-store, must-revalidate");
				res.headers().set("Pragma", "no-cache");
				res.headers().set("Expires", "0");
				sendHttpResponse(ctx, req, res);
			}
            return;
		}
	}
	
	private static void sendHttpResponse(ChannelHandlerContext ctx, DefaultHttpRequest req, FullHttpResponse res) {
        if (res.getStatus().code() != 200) {
            ByteBuf buf = Unpooled.copiedBuffer(res.getStatus().toString(), CharsetUtil.UTF_8);
            res.content().writeBytes(buf);
            buf.release();
            res.headers().set("Content-Length", res.content().readableBytes());
        }

        ChannelFuture f = ctx.channel().writeAndFlush(res);
        boolean keepAlive;
        CharSequence connection = req.headers().get("Connection");
        if (connection != null && "close".equalsIgnoreCase((String) connection)) {
            keepAlive = false;
        }
        if (req.getProtocolVersion().isKeepAliveDefault()) {
            keepAlive = !"close".equalsIgnoreCase((String) connection);
        } else {
            keepAlive = "keep-alive".equalsIgnoreCase((String) connection);
        }
        if (!keepAlive || res.getStatus().code() != 200) {
            f.addListener(ChannelFutureListener.CLOSE);
        }
    }
	
	@Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.close();
    }

}
