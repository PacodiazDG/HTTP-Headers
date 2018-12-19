# Extension


## waf test payload
```?firewalltest?=env%20x=%27()%20{%20:;};%20echo%20IDS/IPS%27%20bash%20-c%20\"IPStest\"///&&&&WAF=\"\"),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)%20waitfor%20delay%20%270:0:20%27%20/*\"&&XSS=<script>alert(1)</script>&&```



#### Prueba a Akamai  WAF 
![image](https://user-images.githubusercontent.com/26071783/50234101-93148600-037a-11e9-9251-e88589c8999a.png)

#### Response Headers

![image](https://user-images.githubusercontent.com/26071783/50234424-4bdac500-037b-11e9-9157-2a40b1255e44.png)
