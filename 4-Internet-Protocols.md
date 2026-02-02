
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
3. If any data packet communication fails, the same data packet will be sent again and again until received (automatic resend on failure)
4. Reliable : TCP ensures successful delivery of data from one point to another point without loss.
5. Order of the data stays persistant (ordered and sequenced)
6. 3 way handshake:
    1. Synchronization flag
    2. Synchronization flag + Acknowledgement
    3. Acknowledgement
Ex: Web Browsing, File transfer, Email

UDP : User Datagram Protocol
-----------------------------
1. Data loss may occur, Live stream uses UDP.
2. While data transfer, some data packets may get lost.
3. No Acknowledgement is present.
4. Connection less
5. No Error Correction
6. No Sequencing (No order preservation)

Ex: Video gaming, live shows, voice calls