package com.anz.banking.utility;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import com.anz.banking.models.DataSource;
import com.anz.banking.models.SessionFactory;
public class BankingApplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
  /* Resource resource = new ClassPathResource("dbContext.xml");
   BeanFactory beanFactory = new XmlBeanFactory(resource);*/
	ApplicationContext appCtx= new ClassPathXmlApplicationContext("dbContext.xml");
   
  
   SessionFactory sessionFactoryObj = (SessionFactory) appCtx.getBean("sessionFactory");
   System.out.println(sessionFactoryObj.getDataSource().getDbName());
   System.out.println(sessionFactoryObj.getDataSource().getPort());
   System.out.println(sessionFactoryObj.getId());
   
   
 
   DataSource dataSource =(DataSource) appCtx.getBean("ds");
   
   System.out.println("Database Name:" +dataSource.getDbName() );
   System.out.println("Database password:" +dataSource.getPassword() );
   System.out.println("Database port:" +dataSource.getPort() );

	}

}
