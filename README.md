# Extension


## waf test payload
```
?firewalltest?=env%20x=%27()%20{%20:;};%20echo%20IDS/IPS%27%20bash%20-c%20\"IPStest\"///&&&&WAF=\"\"),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)%20waitfor%20delay%20%270:0:20%27%20/*\"&&XSS=<script>alert(1)</script>&& ```
