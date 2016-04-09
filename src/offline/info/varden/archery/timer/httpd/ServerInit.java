package info.varden.archery.timer.httpd;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseEncoder;

public class ServerInit extends ChannelInitializer<SocketChannel> {

	@Override
	protected void initChannel(SocketChannel arg0) throws Exception {
		ChannelPipeline p = arg0.pipeline();
		p.addLast(new HttpRequestDecoder());
		p.addLast(new HttpResponseEncoder());
		p.addLast(new HttpHandler());
	}

}
