
## INTERNET PROTOCOLS
---------------------

Protocols -> Rules
1. Whenever data transfer occurs through internet, it either follows
HTTP + TCP or
HTTP + UDP

TCP : Transfer Control Protocol
-------------------------------
1. No data loss occurs
2. For every data packet communication, acknowledge will be received from receiver
3. If any data packet communication fails, the same data packet will be sent again and again until received


UDP : User Datagram Protocol
-----------------------------
1. Data loss may occur, Live stream uses UDP.
2. While data transfer, some data packets may get lost.
3. No Acknowledgement is present.