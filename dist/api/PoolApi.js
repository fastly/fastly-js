"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PoolResponse = _interopRequireDefault(require("../model/PoolResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pool service.
* @module api/PoolApi
* @version 3.0.0-alpha1
*/
var PoolApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PoolApi. 
  * @alias module:api/PoolApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PoolApi(apiClient) {
    _classCallCheck(this, PoolApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Creates a pool for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
   * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
   * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
   * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
   * @param {module:model/Number} [options.use_tls=0] - Whether to use TLS.
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
   * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
   * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
   * @param {Number} [options.max_conn_default] - Maximum number of connections.
   * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
   * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
   * @param {String} [options.name] - Name for the Pool.
   * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
   * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
   * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
   * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
   * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
   * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
   * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
   * @param {module:model/String} [options.type] - What type of load balance group to use.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponse} and HTTP response
   */


  _createClass(PoolApi, [{
    key: "createServerPoolWithHttpInfo",
    value: function createServerPoolWithHttpInfo() {
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
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_cert_hostname': options['tls_cert_hostname'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'use_tls': options['use_tls'],
        'comment': options['comment'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'healthcheck': options['healthcheck'],
        'max_conn_default': options['max_conn_default'],
        'max_tls_version': options['max_tls_version'],
        'min_tls_version': options['min_tls_version'],
        'name': options['name'],
        'override_host': options['override_host'],
        'quorum': options['quorum'],
        'request_condition': options['request_condition'],
        'shield': options['shield'],
        'tls_check_cert': options['tls_check_cert'],
        'tls_ciphers': options['tls_ciphers'],
        'tls_sni_hostname': options['tls_sni_hostname'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _PoolResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/pool', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {module:model/Number} [options.use_tls=0] - Whether to use TLS.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {Number} [options.max_conn_default] - Maximum number of connections.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponse}
     */

  }, {
    key: "createServerPool",
    value: function createServerPool() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createServerPoolWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.pool_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteServerPoolWithHttpInfo",
    value: function deleteServerPoolWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'pool_name' is set.


      if (options['pool_name'] === undefined || options['pool_name'] === null) {
        throw new Error("Missing the required parameter 'pool_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'pool_name': options['pool_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/pool/{pool_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.pool_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteServerPool",
    value: function deleteServerPool() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteServerPoolWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets a single pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.pool_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponse} and HTTP response
     */

  }, {
    key: "getServerPoolWithHttpInfo",
    value: function getServerPoolWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'pool_name' is set.


      if (options['pool_name'] === undefined || options['pool_name'] === null) {
        throw new Error("Missing the required parameter 'pool_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'pool_name': options['pool_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PoolResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/pool/{pool_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets a single pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.pool_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponse}
     */

  }, {
    key: "getServerPool",
    value: function getServerPool() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getServerPoolWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Lists all pools for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PoolResponse>} and HTTP response
     */

  }, {
    key: "listServerPoolsWithHttpInfo",
    value: function listServerPoolsWithHttpInfo() {
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
      var returnType = [_PoolResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/pool', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Lists all pools for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PoolResponse>}
     */

  }, {
    key: "listServerPools",
    value: function listServerPools() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listServerPoolsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.pool_name
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {module:model/Number} [options.use_tls=UseTlsEnum.no_tls] - Whether to use TLS.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {Number} [options.max_conn_default] - Maximum number of connections.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponse} and HTTP response
     */

  }, {
    key: "updateServerPoolWithHttpInfo",
    value: function updateServerPoolWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'pool_name' is set.


      if (options['pool_name'] === undefined || options['pool_name'] === null) {
        throw new Error("Missing the required parameter 'pool_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'pool_name': options['pool_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_cert_hostname': options['tls_cert_hostname'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'use_tls': options['use_tls'],
        'comment': options['comment'],
        'connect_timeout': options['connect_timeout'],
        'first_byte_timeout': options['first_byte_timeout'],
        'healthcheck': options['healthcheck'],
        'max_conn_default': options['max_conn_default'],
        'max_tls_version': options['max_tls_version'],
        'min_tls_version': options['min_tls_version'],
        'name': options['name'],
        'override_host': options['override_host'],
        'quorum': options['quorum'],
        'request_condition': options['request_condition'],
        'shield': options['shield'],
        'tls_check_cert': options['tls_check_cert'],
        'tls_ciphers': options['tls_ciphers'],
        'tls_sni_hostname': options['tls_sni_hostname'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _PoolResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/pool/{pool_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates a specific pool for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.pool_name
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_cert_hostname='null'] - The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {module:model/Number} [options.use_tls=UseTlsEnum.no_tls] - Whether to use TLS.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Number} [options.connect_timeout] - How long to wait for a timeout in milliseconds. Optional.
     * @param {Number} [options.first_byte_timeout] - How long to wait for the first byte in milliseconds. Optional.
     * @param {String} [options.healthcheck] - Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
     * @param {Number} [options.max_conn_default] - Maximum number of connections.
     * @param {Number} [options.max_tls_version] - Maximum allowed TLS version on connections to this server. Optional.
     * @param {Number} [options.min_tls_version] - Minimum allowed TLS version on connections to this server. Optional.
     * @param {String} [options.name] - Name for the Pool.
     * @param {String} [options.override_host='null'] - The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
     * @param {Number} [options.quorum=75] - Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.shield='null'] - Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
     * @param {Number} [options.tls_check_cert] - Be strict on checking TLS certs. Optional.
     * @param {String} [options.tls_ciphers] - List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
     * @param {String} [options.tls_sni_hostname] - SNI hostname. Optional.
     * @param {module:model/String} [options.type] - What type of load balance group to use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponse}
     */

  }, {
    key: "updateServerPool",
    value: function updateServerPool() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateServerPoolWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PoolApi;
}();

exports["default"] = PoolApi;