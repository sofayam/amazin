
## SSL

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04

 - -
Congratulations! You have successfully enabled https://hako.dynpc.org

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=hako.dynpc.org
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/hako.dynpc.org/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/hako.dynpc.org/privkey.pem
   Your cert will expire on 2019-03-17. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.


## PAM


http://www.doublecloud.org/2014/01/nginx-with-pam-authentication/



https://serverfault.com/questions/819382/nginx-doesnt-seem-to-recognize-auth-pam-directive

(Just do "sudo apt-get install libnginx-mod-http-auth-pam" - ubuntu does the rest)