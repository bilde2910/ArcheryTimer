package info.varden.archery.timer.httpd;

import java.util.HashMap;

public class ContentTypes {
	private final static HashMap<String, String> assoc;
	static {
		assoc = new HashMap<String, String>();
		assoc.put("html", "text/html; charset=UTF-8");
		assoc.put("svg", "image/svg+xml; charset=UTF-8");
		assoc.put("png", "image/png");
		assoc.put("js", "text/javascript; charset=UTF-8");
		assoc.put("css", "text/css; charset=UTF-8");
		assoc.put("ico", "image/x-icon");
		assoc.put("wav", "audio/wav");
		assoc.put("ogg", "audio/ogg");
		assoc.put("m4a", "audio/mp4");
	}
	
	public static String getHeaderFor(String uri) {
		String ext = uri.substring(uri.lastIndexOf('.') + 1);
		if (assoc.containsKey(ext)) {
			return assoc.get(ext);
		} else {
			return "application/octet-stream";
		}
	}
}
