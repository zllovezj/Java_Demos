package org.power.classloader;

import java.lang.reflect.Method;

/**
 * @author li.zhang
 * 2014-2-18
 *
 */
public class MainV2
{

    /**
     * @param args
     * @throws ClassNotFoundException 
     * @throws NoSuchMethodException 
     * @throws SecurityException 
     */
    public static void main(String[] args) throws Exception
    {
        ReloadClassLoaderV2 classLoader = new ReloadClassLoaderV2("lib/test.jar");
        Class<?> clazz1 = classLoader.loadClass("org.power.dao.StudentDao", false);
        
        //调用sayHello方法
        Method method = clazz1.getMethod("sayHello");
        method.invoke(clazz1);
        
        //调用query方法
        method = clazz1.getMethod("query");
        method.invoke(clazz1.newInstance());
        
        System.out.println(clazz1.hashCode());
        
        System.out.println("========================================================");
        
        Class<?> clazz2 = classLoader.loadClass("org.power.dao.StudentDao", false);
        
        //调用sayHello方法
        method = clazz2.getMethod("sayHello");
        method.invoke(clazz2);
        
        //调用query方法
        method = clazz2.getMethod("query");
        method.invoke(clazz2.newInstance());
        
        
        System.out.println(clazz2.hashCode()); //这里例子说明，对于一个类的同一个class文件，最终调用本地方法生成内存中的Class对象时，他们总是相等的.
        System.out.println(clazz1 == clazz2); //这里例子说明，对于一个类的同一个class文件，最终调用本地方法生成内存中的Class对象时，他们总是相等的.

        System.out.println("=========================================================");
        
        Class<?> clazz5 = Class.forName("java.lang.String", true, classLoader);
        System.out.println(clazz5);
        
    }

}
