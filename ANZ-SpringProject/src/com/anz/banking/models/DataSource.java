package com.anz.banking.models;

public class DataSource {
	private String url;
	private String userName;
	private String password;
	private String dbName;
	private int port;

	
	
	public DataSource(String url, String userName) {
		super();
		System.out.println("inside data source");
		this.url = url;
		this.userName = userName;
		
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDbName() {
		return dbName;
	}
	public void setDbName(String dbName) {
		this.dbName = dbName;
	}
	public int getPort() {
		return port;
	}
	public void setPort(int port) {
		this.port = port;
	}

}
