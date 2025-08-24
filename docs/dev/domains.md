# Custom Domains

When you use an Isaac Service, all consumer-facing domains are branded with your company. This means that in places where the average customer would expect to see your brand, like website or email, they'll see your domain. For example, my website is www.isaac.run and my email addresses end in @isaac.run.

Behind the scenes, domains are often managed by or supported by my corporate domains. The mail server is mail.xtzws.com and often if you have static assets that can be served from a different host, those will come from something like i-cdn-deby.xtzws.com.
:::info
Subdomains of xtzws.com follow a set format to ensure uniqueness and make management easier. They can enable certain features of your website that your main (www.example.com) host may not allow or be difficult to enable. You may choose your own prefix as long as it has not already been taken.

`<prefix>-<service>-<server country ISO 3166-1 alpha-2><server state ISO 3166-2>.xtzws.com`
:::

In some situations, you can use your own domain (managed by me or not) for different services. This may carry additional costs and is only available for single-tenant use cases. For example, your MX record **must** point to mail.xtzws.com.
