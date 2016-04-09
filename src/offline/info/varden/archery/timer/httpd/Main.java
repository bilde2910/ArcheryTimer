package info.varden.archery.timer.httpd;

import info.varden.archery.timer.httpd.gui.MainGui;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;

public class Main {
	
	public static final String VERSION_ID = "93e5b2a9-3774-4266-a7a1-c5874c106d1c";

	public static void main(final String[] args) {
		Thread t = new Thread(new Runnable() {

			@Override
			public void run() {
				MainGui.main(args);
			}
			
		});
		t.start();
		
		EventLoopGroup bossGroup = new NioEventLoopGroup(1);
		EventLoopGroup workerGroup = new NioEventLoopGroup();
		
		try {
			ServerBootstrap b = new ServerBootstrap();
			b.group(bossGroup, workerGroup).channel(NioServerSocketChannel.class).handler(new LoggingHandler(LogLevel.INFO)).childHandler(new ServerInit());
			Channel ch = b.bind(8120).sync().channel();
			ch.closeFuture().sync();
		} catch (InterruptedException e) {
			e.printStackTrace();
		} finally {
			bossGroup.shutdownGracefully();
			workerGroup.shutdownGracefully();
		}
	}

}
