package com.anz.banking.models;

public class JPADataSource extends DataSource {
	private int connectionPoolSize;
	private boolean ddl;
	private boolean show;

	public JPADataSource(String url, String userName, int connectionPoolSize, boolean ddl, boolean show) {
		
		super(url, userName);
		System.out.println("inside JPA DATASOURCE");
		this.connectionPoolSize = connectionPoolSize;
		this.ddl = ddl;
		this.show = show;
	}

	public JPADataSource(String url, String userName) {
		super(url, userName);
		// TODO Auto-generated constructor stub
		
	}

	public int getConnectionPoolSize() {
		return connectionPoolSize;
	}

	public void setConnectionPoolSize(int connectionPoolSize) {
		this.connectionPoolSize = connectionPoolSize;
	}

	public boolean isDdl() {
		return ddl;
	}

	public void setDdl(boolean ddl) {
		this.ddl = ddl;
	}

	public boolean isShow() {
		return show;
	}

	public void setShow(boolean show) {
		this.show = show;
	}

}
