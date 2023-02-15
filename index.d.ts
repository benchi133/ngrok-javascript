/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/**
 * turn on tracing subscriber which obeys NGROK_LOG env variable, e.g.:
 * process.env.NGROK_LOG = 'ngrok=debug';
 * ngrok.tracingSubscriber();
 */
export function tracingSubscriber(): void
/** The builder for an ngrok session. */
export class NgrokSessionBuilder {
  /** Create a new session builder */
  constructor()
  /**
   * Configures the session to authenticate with the provided authtoken. You
   * can [find your existing authtoken] or [create a new one] in the ngrok
   * dashboard.
   *
   * See the [authtoken parameter in the ngrok docs] for additional details.
   *
   * [find your existing authtoken]: https://dashboard.ngrok.com/get-started/your-authtoken
   * [create a new one]: https://dashboard.ngrok.com/tunnels/authtokens
   * [authtoken parameter in the ngrok docs]: https://ngrok.com/docs/ngrok-agent/config#authtoken
   */
  authtoken(authtoken: string): this
  /**
   * Shortcut for calling [SessionBuilder::authtoken] with the value of the
   * NGROK_AUTHTOKEN environment variable.
   */
  authtokenFromEnv(): this
  /**
   * Configures how often the session will send heartbeat messages to the ngrok
   * service to check session liveness.
   *
   * See the [heartbeat_interval parameter in the ngrok docs] for additional
   * details.
   *
   * [heartbeat_interval parameter in the ngrok docs]: https://ngrok.com/docs/ngrok-agent/config#heartbeat_interval
   */
  heartbeatInterval(heartbeatInterval: number): this
  /**
   * Configures the duration to wait for a response to a heartbeat before
   * assuming the session connection is dead and attempting to reconnect.
   *
   * See the [heartbeat_tolerance parameter in the ngrok docs] for additional
   * details.
   *
   * [heartbeat_tolerance parameter in the ngrok docs]: https://ngrok.com/docs/ngrok-agent/config#heartbeat_tolerance
   */
  heartbeatTolerance(heartbeatTolerance: number): this
  /**
   * Configures the opaque, machine-readable metadata string for this session.
   * Metadata is made available to you in the ngrok dashboard and the Agents API
   * resource. It is a useful way to allow you to uniquely identify sessions. We
   * suggest encoding the value in a structured format like JSON.
   *
   * See the [metdata parameter in the ngrok docs] for additional details.
   *
   * [metdata parameter in the ngrok docs]: https://ngrok.com/docs/ngrok-agent/config#metadata
   */
  metadata(metadata: string): this
  /**
   * Configures the network address to dial to connect to the ngrok service.
   * Use this option only if you are connecting to a custom agent ingress.
   *
   * See the [server_addr parameter in the ngrok docs] for additional details.
   *
   * [server_addr parameter in the ngrok docs]: https://ngrok.com/docs/ngrok-agent/config#server_addr
   */
  serverAddr(addr: string): this
  /**
   * Configures a function which is called when the ngrok service requests that
   * this [Session] stops. Your application may choose to interpret this callback
   * as a request to terminate the [Session] or the entire process.
   *
   * Errors returned by this function will be visible to the ngrok dashboard or
   * API as the response to the Stop operation.
   *
   * Do not block inside this callback. It will cause the Dashboard or API
   * stop operation to time out. Do not call [std::process::exit] inside this
   * callback, it will also cause the operation to time out.
   */
  handleStopCommand(handler: () => void): this
  /**
   * Configures a function which is called when the ngrok service requests
   * that this [Session] updates. Your application may choose to interpret
   * this callback as a request to restart the [Session] or the entire
   * process.
   *
   * Errors returned by this function will be visible to the ngrok dashboard or
   * API as the response to the Restart operation.
   *
   * Do not block inside this callback. It will cause the Dashboard or API
   * stop operation to time out. Do not call [std::process::exit] inside this
   * callback, it will also cause the operation to time out.
   */
  handleRestartCommand(handler: () => void): this
  /**
   * Configures a function which is called when the ngrok service requests
   * that this [Session] updates. Your application may choose to interpret
   * this callback as a request to update its configuration, itself, or to
   * invoke some other application-specific behavior.
   *
   * Errors returned by this function will be visible to the ngrok dashboard or
   * API as the response to the Restart operation.
   *
   * Do not block inside this callback. It will cause the Dashboard or API
   * stop operation to time out. Do not call [std::process::exit] inside this
   * callback, it will also cause the operation to time out.
   */
  handleUpdateCommand(handler: (update: UpdateRequest) => void): this
  /** Attempt to establish an ngrok session using the current configuration. */
  connect(): Promise<NgrokSession>
}
/** An ngrok session. */
export class NgrokSession {
  /** Start building a tunnel backing an HTTP endpoint. */
  httpEndpoint(): NgrokHttpTunnelBuilder
  /** Start building a tunnel backing a TCP endpoint. */
  tcpEndpoint(): NgrokTcpTunnelBuilder
  /** Start building a tunnel backing a TLS endpoint. */
  tlsEndpoint(): NgrokTlsTunnelBuilder
  /** Start building a labeled tunnel. */
  labeledTunnel(): NgrokLabeledTunnelBuilder
  closeTunnel(id: string): Promise<void>
}
export class UpdateRequest {
  /** The version that the agent is requested to update to. */
  version: string
  /** Whether or not updating to the same major version is sufficient. */
  permitMajorVersion: boolean
}
/**r" An ngrok tunnel backing an HTTP endpoint. */
export class NgrokHttpTunnel {
  /** The URL that this tunnel backs. */
  url(): string
  /** The protocol of the endpoint that this tunnel backs. */
  proto(): string
  /** The ID of this tunnel, assigned by the remote server. */
  id(): string
  /** Forward incoming tunnel connections to the provided TCP address. */
  forwardTcp(addr: string): Promise<void>
  /** Forward incoming tunnel connections to the provided Unix socket path. */
  forwardUnix(addr: string): Promise<void>
  /** Close the tunnel. */
  close(): Promise<void>
}
/**r" An ngrok tunnel backing a TCP endpoint. */
export class NgrokTcpTunnel {
  /** The URL that this tunnel backs. */
  url(): string
  /** The protocol of the endpoint that this tunnel backs. */
  proto(): string
  /** The ID of this tunnel, assigned by the remote server. */
  id(): string
  /** Forward incoming tunnel connections to the provided TCP address. */
  forwardTcp(addr: string): Promise<void>
  /** Forward incoming tunnel connections to the provided Unix socket path. */
  forwardUnix(addr: string): Promise<void>
  /** Close the tunnel. */
  close(): Promise<void>
}
/**r" An ngrok tunnel bcking a TLS endpoint. */
export class NgrokTlsTunnel {
  /** The URL that this tunnel backs. */
  url(): string
  /** The protocol of the endpoint that this tunnel backs. */
  proto(): string
  /** The ID of this tunnel, assigned by the remote server. */
  id(): string
  /** Forward incoming tunnel connections to the provided TCP address. */
  forwardTcp(addr: string): Promise<void>
  /** Forward incoming tunnel connections to the provided Unix socket path. */
  forwardUnix(addr: string): Promise<void>
  /** Close the tunnel. */
  close(): Promise<void>
}
/**r" A labeled ngrok tunnel. */
export class NgrokLabeledTunnel {
  /** The labels this tunnel was started with. */
  labels(): Record<string, string>
  /** The ID of this tunnel, assigned by the remote server. */
  id(): string
  /** Forward incoming tunnel connections to the provided TCP address. */
  forwardTcp(addr: string): Promise<void>
  /** Forward incoming tunnel connections to the provided Unix socket path. */
  forwardUnix(addr: string): Promise<void>
  /** Close the tunnel. */
  close(): Promise<void>
}
/**r" An ngrok tunnel backing an HTTP endpoint. */
export class NgrokHttpTunnelBuilder {
  /**
   * The scheme that this edge should use.
   * Defaults to [Scheme::HTTPS].
   */
  scheme(scheme: string): this
  /** The domain to request for this edge. */
  domain(domain: string): this
  /** Certificates to use for client authentication at the ngrok edge. */
  mutualTlsca(mutualTlsca: Uint8Array): this
  /** Enable gzip compression for HTTP responses. */
  compression(): this
  /** Convert incoming websocket connections to TCP-like streams. */
  websocketTcpConversion(): this
  /**
   * Reject requests when 5XX responses exceed this ratio.
   * Disabled when 0.
   */
  circuitBreaker(circuitBreaker: number): this
  /** with_request_header adds a header to all requests to this edge. */
  requestHeader(name: string, value: string): this
  /** with_response_header adds a header to all responses coming from this edge. */
  responseHeader(name: string, value: string): this
  /** with_remove_request_header removes a header from requests to this edge. */
  removeRequestHeader(name: string): this
  /** with_remove_response_header removes a header from responses from this edge. */
  removeResponseHeader(name: string): this
  /**
   * Credentials for basic authentication.
   * If not called, basic authentication is disabled.
   */
  basicAuth(username: string, password: string): this
  /**
   * OAuth configuration.
   * If not called, OAuth is disabled.
   */
  oauth(provider: string, allowEmails: Array<string>, allowDomains: Array<string>, scopes: Array<string>): this
  /**
   * OIDC configuration.
   * If not called, OIDC is disabled.
   */
  oidc(issuerUrl: string, clientId: string, clientSecret: string, allowEmails: Array<string>, allowDomains: Array<string>, scopes: Array<string>): this
  /**
   * WebhookVerification configuration.
   * If not called, WebhookVerification is disabled.
   */
  webhookVerification(provider: string, secret: string): this
  /** Tunnel-specific opaque metadata. Viewable via the API. */
  metadata(metadata: string): this
  /** Begin listening for new connections on this tunnel. */
  listen(): Promise<NgrokHttpTunnel>
  /**
   * Restriction placed on the origin of incoming connections to the edge to only allow these CIDR ranges.
   * Call multiple times to add additional CIDR ranges.
   */
  allowCidr(cidr: string): this
  /**
   * Restriction placed on the origin of incoming connections to the edge to deny these CIDR ranges.
   * Call multiple times to add additional CIDR ranges.
   */
  denyCidr(cidr: string): this
  /** The version of PROXY protocol to use with this tunnel, None if not using. */
  proxyProto(proxyProto: string): this
  /**
   * Tunnel backend metadata. Viewable via the dashboard and API, but has no
   * bearing on tunnel behavior.
   */
  forwardsTo(forwardsTo: string): this
}
/**r" An ngrok tunnel backing a TCP endpoint. */
export class NgrokTcpTunnelBuilder {
  /** The TCP address to request for this edge. */
  remoteAddr(remoteAddr: string): this
  /** Tunnel-specific opaque metadata. Viewable via the API. */
  metadata(metadata: string): this
  /** Begin listening for new connections on this tunnel. */
  listen(): Promise<NgrokTcpTunnel>
  /**
   * Restriction placed on the origin of incoming connections to the edge to only allow these CIDR ranges.
   * Call multiple times to add additional CIDR ranges.
   */
  allowCidr(cidr: string): this
  /**
   * Restriction placed on the origin of incoming connections to the edge to deny these CIDR ranges.
   * Call multiple times to add additional CIDR ranges.
   */
  denyCidr(cidr: string): this
  /** The version of PROXY protocol to use with this tunnel, None if not using. */
  proxyProto(proxyProto: string): this
  /**
   * Tunnel backend metadata. Viewable via the dashboard and API, but has no
   * bearing on tunnel behavior.
   */
  forwardsTo(forwardsTo: string): this
}
/**r" An ngrok tunnel backing a TLS endpoint. */
export class NgrokTlsTunnelBuilder {
  /** The domain to request for this edge. */
  domain(domain: string): this
  /** Certificates to use for client authentication at the ngrok edge. */
  mutualTlsca(mutualTlsca: Uint8Array): this
  /** The key to use for TLS termination at the ngrok edge in PEM format. */
  termination(certPem: Uint8Array, keyPem: Uint8Array): this
  /** Tunnel-specific opaque metadata. Viewable via the API. */
  metadata(metadata: string): this
  /** Begin listening for new connections on this tunnel. */
  listen(): Promise<NgrokTlsTunnel>
  /**
   * Restriction placed on the origin of incoming connections to the edge to only allow these CIDR ranges.
   * Call multiple times to add additional CIDR ranges.
   */
  allowCidr(cidr: string): this
  /**
   * Restriction placed on the origin of incoming connections to the edge to deny these CIDR ranges.
   * Call multiple times to add additional CIDR ranges.
   */
  denyCidr(cidr: string): this
  /** The version of PROXY protocol to use with this tunnel, None if not using. */
  proxyProto(proxyProto: string): this
  /**
   * Tunnel backend metadata. Viewable via the dashboard and API, but has no
   * bearing on tunnel behavior.
   */
  forwardsTo(forwardsTo: string): this
}
/**r" A labeled ngrok tunnel. */
export class NgrokLabeledTunnelBuilder {
  /** Tunnel-specific opaque metadata. Viewable via the API. */
  metadata(metadata: string): this
  /** Begin listening for new connections on this tunnel. */
  listen(): Promise<NgrokLabeledTunnel>
  /** Add a label, value pair for this tunnel. */
  label(label: string, value: string): this
}
export function getSocket(tunnel?: (NgrokHttpTunnel|NgrokTcpTunnel|NgrokTlsTunnel|NgrokLabeledTunnel)): net.Server
export function listen(server: net.Server, tunnel?: (NgrokHttpTunnel|NgrokTcpTunnel|NgrokTlsTunnel|NgrokLabeledTunnel)): (NgrokHttpTunnel|NgrokTcpTunnel|NgrokTlsTunnel|NgrokLabeledTunnel)
