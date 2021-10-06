"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceIdAndVersion = _interopRequireDefault(require("../model/ServiceIdAndVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Backend service.
* @module api/BackendApi
* @version 3.0.0-alpha1
*/
var BackendApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BackendApi. 
  * @alias module:api/BackendApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BackendApi(apiClient) {
    _classCallCheck(this, BackendApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a backend for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
   * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
   * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
   * @param {String} [options.client_cert] - Unused.
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
   * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
   * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
   * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
   * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
   * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
   * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
   * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
   * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
   * @param {String} [options.name] - The name of the backend.
   * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
   * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
   * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
   * @param {String} [options.shield] - Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
   * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
   * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
   * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
   * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
   * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
   * @param {String} [options.ssl_client_key] - Client key attached to origin.
   * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
   * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
   * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
   * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
   */


  _createClass(BackendApi, [{
    key: "createBackendWithHttpInfo",
    value: function createBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'address': options['address'],
        'auto_loadbalance': options['auto_loadbalance'],
        'between_bytes_timeout': options['between_bytes_timeout'],
        'client_cert': options['client_cert'],
        'comment': options['comment'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'healthcheck': options['healthcheck'],
        'hostname': options['hostname'],
        'ipv4': options['ipv4'],
        'ipv6': options['ipv6'],
        'max_conn': options['max_conn'],
        'max_tls_version': options['max_tls_version'],
        'min_tls_version': options['min_tls_version'],
        'name': options['name'],
        'override_host': options['override_host'],
        'port': options['port'],
        'request_condition': options['request_condition'],
        'shield': options['shield'],
        'ssl_ca_cert': options['ssl_ca_cert'],
        'ssl_cert_hostname': options['ssl_cert_hostname'],
        'ssl_check_cert': options['ssl_check_cert'],
        'ssl_ciphers': options['ssl_ciphers'],
        'ssl_client_cert': options['ssl_client_cert'],
        'ssl_client_key': options['ssl_client_key'],
        'ssl_hostname': options['ssl_hostname'],
        'ssl_sni_hostname': options['ssl_sni_hostname'],
        'use_ssl': options['use_ssl'],
        'weight': options['weight']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ServiceIdAndVersion["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/backend', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.shield] - Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */

  }, {
    key: "createBackend",
    value: function createBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.backend_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteBackendWithHttpInfo",
    value: function deleteBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'backend_name' is set.


      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/backend/{backend_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.backend_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteBackend",
    value: function deleteBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.backend_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
     */

  }, {
    key: "getBackendWithHttpInfo",
    value: function getBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'backend_name' is set.


      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ServiceIdAndVersion["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/backend/{backend_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.backend_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */

  }, {
    key: "getBackend",
    value: function getBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all backends for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ServiceIdAndVersion>} and HTTP response
     */

  }, {
    key: "listBackendsWithHttpInfo",
    value: function listBackendsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ServiceIdAndVersion["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/backend', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all backends for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceIdAndVersion>}
     */

  }, {
    key: "listBackends",
    value: function listBackends() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listBackendsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.backend_name
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.shield] - Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
     */

  }, {
    key: "updateBackendWithHttpInfo",
    value: function updateBackendWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'backend_name' is set.


      if (options['backend_name'] === undefined || options['backend_name'] === null) {
        throw new Error("Missing the required parameter 'backend_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'backend_name': options['backend_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'address': options['address'],
        'auto_loadbalance': options['auto_loadbalance'],
        'between_bytes_timeout': options['between_bytes_timeout'],
        'client_cert': options['client_cert'],
        'comment': options['comment'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'healthcheck': options['healthcheck'],
        'hostname': options['hostname'],
        'ipv4': options['ipv4'],
        'ipv6': options['ipv6'],
        'max_conn': options['max_conn'],
        'max_tls_version': options['max_tls_version'],
        'min_tls_version': options['min_tls_version'],
        'name': options['name'],
        'override_host': options['override_host'],
        'port': options['port'],
        'request_condition': options['request_condition'],
        'shield': options['shield'],
        'ssl_ca_cert': options['ssl_ca_cert'],
        'ssl_cert_hostname': options['ssl_cert_hostname'],
        'ssl_check_cert': options['ssl_check_cert'],
        'ssl_ciphers': options['ssl_ciphers'],
        'ssl_client_cert': options['ssl_client_cert'],
        'ssl_client_key': options['ssl_client_key'],
        'ssl_hostname': options['ssl_hostname'],
        'ssl_sni_hostname': options['ssl_sni_hostname'],
        'use_ssl': options['use_ssl'],
        'weight': options['weight']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ServiceIdAndVersion["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/backend/{backend_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the backend for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.backend_name
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
     * @param {Boolean} [options.auto_loadbalance] - Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
     * @param {Number} [options.between_bytes_timeout] - Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
     * @param {String} [options.client_cert] - Unused.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
     * @param {Number} [options.first_byte_timeout] - Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
     * @param {String} [options.healthcheck] - The name of the healthcheck to use with this backend.
     * @param {String} [options.hostname] - The hostname of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv4] - IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {String} [options.ipv6] - IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
     * @param {Number} [options.max_conn] - Maximum number of concurrent connections this backend will accept.
     * @param {String} [options.max_tls_version] - Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.min_tls_version] - Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.name] - The name of the backend.
     * @param {String} [options.override_host] - If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
     * @param {Number} [options.port] - Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
     * @param {String} [options.request_condition] - Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
     * @param {String} [options.shield] - Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
     * @param {String} [options.ssl_ca_cert] - CA certificate attached to origin.
     * @param {String} [options.ssl_cert_hostname] - Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
     * @param {Boolean} [options.ssl_check_cert=true] - Be strict on checking SSL certs.
     * @param {String} [options.ssl_ciphers] - List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
     * @param {String} [options.ssl_client_cert] - Client certificate attached to origin.
     * @param {String} [options.ssl_client_key] - Client key attached to origin.
     * @param {String} [options.ssl_hostname] - Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
     * @param {String} [options.ssl_sni_hostname] - Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
     * @param {Boolean} [options.use_ssl] - Whether or not to require TLS for connections to this backend.
     * @param {Number} [options.weight] - Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */

  }, {
    key: "updateBackend",
    value: function updateBackend() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateBackendWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BackendApi;
}();

exports["default"] = BackendApi;