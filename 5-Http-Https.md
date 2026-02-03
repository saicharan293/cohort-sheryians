
## HTTP and HTTPS
-----------------

# HTTP:
1. Hyper Text Transfer Protocol
2. No Secure

## HTTP versions:
# HTTP 1.0 (1996) : `slow`
1. Every request opens a new request and closed after recieving response.

# HTTP 1.1 (1997) : `fast`
1. Persistant connection
2. Multiple request could share the same connection
3. Requests and responses are sent and received in a sequential manner,

# HTTP 2.0 : `faster`
1. uses Multiplexing is a method where multiple data streams are combined into one signal for transmission over a single TCP connection.
2. Requests and responses run without any waiting or interference
3. Uses Binary Protocol, not human readable (reducing delay), unlike text based protocol

# HTTP 3.0 : `fastest`
1. Built on QUIC protocol (Quick UDP Internet Connection) designed by Google for enhanced performance
2. Key Features of QUIC ✨
`Multiplexing`: Allows multiple streams of data to be sent over a single connection, improving efficiency.
`Reduced Latency`: Uses techniques to minimize delays in data transmission.
`Encryption`: Built-in security features to protect data in transit.
`Forward Error Correction`: Helps in recovering lost packets without retransmission, enhancing reliability.
3. How QUIC Works 🚀
    1. Connection Establishment: QUIC uses a quicker handshake process compared to TCP.
    2. Data Transmission: Data is sent in small packets, allowing for efficient use of network resources.
    3. Error Handling: Implements mechanisms to handle packet loss and congestion more effectively.


# Status codes
200 : OK status
301 : redirection
304 : Cached (not modified)
500 : Server Error

# HTTPS:
1. Hyper Text Transfer Protocol Secured
2. Here Data is Encrypted through SSL/TLS Encryption via digital key.
3. First Browser, Server first do a handshake to agree on a Shared Secred key and then data transfer happen through Encrypted tunnel

## SSL : Secure Sockets Layer
## TLS : Transport Layer Security (enhanced version of SSL) gives Digital certificate

`Proxy`:
------

1. If a person uses machine "A", but has some restrictions in it. He can set up a different machine at some other place (home, room etc) "B" machine.
2. He set up the "B" in such a way, what every he searches through "A", pass through the Browser of "B" allowing restriction by pass.
3. Machine "B" is `Proxy` server

# Flow of Proxy:
---------------

When a device connects to a Wi-Fi router (LAN), it receives a private IP address from the router using DHCP (Dynamic Host Configuration Protocol).

When the device searches for a website URL, the request goes through the router to the internet. The website sees the public IP of your router, not your private IP.

To mask your public IP, you can connect your device to a proxy server. The proxy server fetches the website on your behalf and sends the results back to your device.

From the website’s perspective, the request comes from the proxy’s IP, not your router’s IP.

`Without Proxy`:

Mobile/Laptop → Wi-Fi Router (Private IP: 192.168.1.12 / Public IP: 100.50.23.12) → Internet → Website

`With Proxy`:
Mobile/Laptop → Wi-Fi Router → Proxy Server (Public IP: 54.23.12.45) → Internet → Website



`Reverse Proxy`:
----------------
These are the machines(servers) that routes the traffic to other servers
It retrieves data on behalf of client from one or more servers

# How Reverse Proxy Works :
-------------------------
1. Client Request: A client (like your web browser) sends a request to access a resource.
2. Reverse Proxy Interception: The reverse proxy server intercepts this request.
3. Forwarding Request: The reverse proxy forwards the request to the appropriate backend server.
4. Response Retrieval: The backend server processes the request and sends the response back to the reverse proxy.
5. Response to Client: The reverse proxy then sends the response back to the client.

`Example of Reverse Proxy`:
----------------------------

Imagine you have a store with multiple workers (servers) inside. Instead of customers (clients) going directly to each worker, they go to the front desk (reverse proxy) first. The front desk then decides which worker can best handle the customer's request and sends it to that worker. The worker processes the request and sends the result back to the front desk, which then gives it to the customer. This way, the customer doesn’t need to know about the workers inside the store.

# Key Points 📌:
------------------

Front Desk (Reverse Proxy): Handles all incoming requests from customers.
Workers (Servers): Process the requests and send back responses.
Customers (Clients): Only interact with the front desk, not directly with the workers.

# VPN (Virtual Private Network):
---------------------------------
1. It does the proxy (routing) at Device Level

Device ⇄ VPN Server

Device → Router → ISP → (Encrypted Tunnel) → VPN Server → Internet → Website

the website assumes that the VPN server is in Germany
(the router is completely invisible to the website)
