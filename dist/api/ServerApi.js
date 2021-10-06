"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Timestamps = _interopRequireDefault(require("../model/Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Server service.
* @module api/ServerApi
* @version 3.0.0-alpha1
*/
var ServerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ServerApi. 
  * @alias module:api/ServerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ServerApi(apiClient) {
    _classCallCheck(this, ServerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Creates a single server for a particular service and pool.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {String} options.pool_id
   * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
   * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
   * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
   * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
   * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
   */


  _createClass(ServerApi, [{
    key: "createPoolServerWithHttpInfo",
    value: function createPoolServerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'pool_id' is set.


      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'address': options['address'],
        'comment': options['comment'],
        'disabled': options['disabled'],
        'max_conn': options['max_conn'],
        'override_host': options['override_host'],
        'port': options['port'],
        'weight': options['weight']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/service/{service_id}/pool/{pool_id}/server', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "createPoolServer",
    value: function createPoolServer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createPoolServerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} options.server_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deletePoolServerWithHttpInfo",
    value: function deletePoolServerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'pool_id' is set.


      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      } // Verify the required parameter 'server_id' is set.


      if (options['server_id'] === undefined || options['server_id'] === null) {
        throw new Error("Missing the required parameter 'server_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id'],
        'server_id': options['server_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/pool/{pool_id}/server/{server_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} options.server_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deletePoolServer",
    value: function deletePoolServer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deletePoolServerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} options.server_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "getPoolServerWithHttpInfo",
    value: function getPoolServerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'pool_id' is set.


      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      } // Verify the required parameter 'server_id' is set.


      if (options['server_id'] === undefined || options['server_id'] === null) {
        throw new Error("Missing the required parameter 'server_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id'],
        'server_id': options['server_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/service/{service_id}/pool/{pool_id}/server/{server_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} options.server_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "getPoolServer",
    value: function getPoolServer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getPoolServerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Lists all servers for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Timestamps>} and HTTP response
     */

  }, {
    key: "listPoolServersWithHttpInfo",
    value: function listPoolServersWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'pool_id' is set.


      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Timestamps["default"]];
      return this.apiClient.callApi('/service/{service_id}/pool/{pool_id}/servers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Lists all servers for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Timestamps>}
     */

  }, {
    key: "listPoolServers",
    value: function listPoolServers() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listPoolServersWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} options.server_id
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Timestamps} and HTTP response
     */

  }, {
    key: "updatePoolServerWithHttpInfo",
    value: function updatePoolServerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'pool_id' is set.


      if (options['pool_id'] === undefined || options['pool_id'] === null) {
        throw new Error("Missing the required parameter 'pool_id'.");
      } // Verify the required parameter 'server_id' is set.


      if (options['server_id'] === undefined || options['server_id'] === null) {
        throw new Error("Missing the required parameter 'server_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'pool_id': options['pool_id'],
        'server_id': options['server_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'address': options['address'],
        'comment': options['comment'],
        'disabled': options['disabled'],
        'max_conn': options['max_conn'],
        'override_host': options['override_host'],
        'port': options['port'],
        'weight': options['weight']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Timestamps["default"];
      return this.apiClient.callApi('/service/{service_id}/pool/{pool_id}/server/{server_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates a single server for a particular service and pool.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.pool_id
     * @param {String} options.server_id
     * @param {String} [options.address] - A hostname, IPv4, or IPv6 address for the server. Required.
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {Boolean} [options.disabled=false] - Allows servers to be enabled and disabled in a pool.
     * @param {Number} [options.max_conn=0] - Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
     * @param {String} [options.override_host='null'] - The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
     * @param {Number} [options.port=80] - Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
     * @param {Number} [options.weight=100] - Weight (`1-100`) used to load balance this server against others.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Timestamps}
     */

  }, {
    key: "updatePoolServer",
    value: function updatePoolServer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updatePoolServerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ServerApi;
}();

exports["default"] = ServerApi;