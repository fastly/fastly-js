"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsPrivateKey = _interopRequireDefault(require("../model/TlsPrivateKey"));

var _TlsPrivateKeyResponse = _interopRequireDefault(require("../model/TlsPrivateKeyResponse"));

var _TlsPrivateKeysResponse = _interopRequireDefault(require("../model/TlsPrivateKeysResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsPrivateKeys service.
* @module api/TlsPrivateKeysApi
* @version 3.0.0-alpha1
*/
var TlsPrivateKeysApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsPrivateKeysApi. 
  * @alias module:api/TlsPrivateKeysApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsPrivateKeysApi(apiClient) {
    _classCallCheck(this, TlsPrivateKeysApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a TLS private key.
   * @param {Object} options
   * @param {module:model/TlsPrivateKey} [options.tls_private_key]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsPrivateKeyResponse} and HTTP response
   */


  _createClass(TlsPrivateKeysApi, [{
    key: "createTlsKeyWithHttpInfo",
    value: function createTlsKeyWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_private_key'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsPrivateKeyResponse["default"];
      return this.apiClient.callApi('/tls/private_keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a TLS private key.
     * @param {Object} options
     * @param {module:model/TlsPrivateKey} [options.tls_private_key]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsPrivateKeyResponse}
     */

  }, {
    key: "createTlsKey",
    value: function createTlsKey() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createTlsKeyWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.
     * @param {Object} options
     * @param {String} options.tls_private_key_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteTlsKeyWithHttpInfo",
    value: function deleteTlsKeyWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_private_key_id' is set.

      if (options['tls_private_key_id'] === undefined || options['tls_private_key_id'] === null) {
        throw new Error("Missing the required parameter 'tls_private_key_id'.");
      }

      var pathParams = {
        'tls_private_key_id': options['tls_private_key_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tls/private_keys/{tls_private_key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.
     * @param {Object} options
     * @param {String} options.tls_private_key_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteTlsKey",
    value: function deleteTlsKey() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteTlsKeyWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show a TLS private key.
     * @param {Object} options
     * @param {String} options.tls_private_key_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsPrivateKeyResponse} and HTTP response
     */

  }, {
    key: "getTlsKeyWithHttpInfo",
    value: function getTlsKeyWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_private_key_id' is set.

      if (options['tls_private_key_id'] === undefined || options['tls_private_key_id'] === null) {
        throw new Error("Missing the required parameter 'tls_private_key_id'.");
      }

      var pathParams = {
        'tls_private_key_id': options['tls_private_key_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsPrivateKeyResponse["default"];
      return this.apiClient.callApi('/tls/private_keys/{tls_private_key_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show a TLS private key.
     * @param {Object} options
     * @param {String} options.tls_private_key_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsPrivateKeyResponse}
     */

  }, {
    key: "getTlsKey",
    value: function getTlsKey() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTlsKeyWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all TLS private keys.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Limit the returned keys to those without any matching TLS certificates. The only valid value is false.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsPrivateKeysResponse} and HTTP response
     */

  }, {
    key: "listTlsKeysWithHttpInfo",
    value: function listTlsKeysWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[in_use]': options['filter_in_use'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsPrivateKeysResponse["default"];
      return this.apiClient.callApi('/tls/private_keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all TLS private keys.
     * @param {Object} options
     * @param {String} [options.filter_in_use] - Limit the returned keys to those without any matching TLS certificates. The only valid value is false.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsPrivateKeysResponse}
     */

  }, {
    key: "listTlsKeys",
    value: function listTlsKeys() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsKeysWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsPrivateKeysApi;
}();

exports["default"] = TlsPrivateKeysApi;