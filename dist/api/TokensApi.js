"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenericTokenError = _interopRequireDefault(require("../model/GenericTokenError"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _TokenCreatedResponse = _interopRequireDefault(require("../model/TokenCreatedResponse"));

var _TokenResponse = _interopRequireDefault(require("../model/TokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tokens service.
* @module api/TokensApi
* @version 3.0.0-alpha1
*/
var TokensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TokensApi. 
  * @alias module:api/TokensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TokensApi(apiClient) {
    _classCallCheck(this, TokensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Revoke Tokens in bulk format. Users may only revoke their own tokens. Superusers may revoke tokens of others.
   * @param {Object} options
   * @param {Object} [options.body]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(TokensApi, [{
    key: "bulkRevokeTokensWithHttpInfo",
    value: function bulkRevokeTokensWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json; ext=bulk'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tokens', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Revoke Tokens in bulk format. Users may only revoke their own tokens. Superusers may revoke tokens of others.
     * @param {Object} options
     * @param {Object} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "bulkRevokeTokens",
    value: function bulkRevokeTokens() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.bulkRevokeTokensWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create an API token. If two-factor authentication is enabled for your account, review [the instructions](/reference/api/auth/) for including a one-time password in the request. 
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenCreatedResponse} and HTTP response
     */

  }, {
    key: "createTokenWithHttpInfo",
    value: function createTokenWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _TokenCreatedResponse["default"];
      return this.apiClient.callApi('/tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an API token. If two-factor authentication is enabled for your account, review [the instructions](/reference/api/auth/) for including a one-time password in the request. 
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenCreatedResponse}
     */

  }, {
    key: "createToken",
    value: function createToken() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createTokenWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a single token based on the access_token used in the request.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenResponse} and HTTP response
     */

  }, {
    key: "getTokenCurrentWithHttpInfo",
    value: function getTokenCurrentWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TokenResponse["default"];
      return this.apiClient.callApi('/tokens/self', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a single token based on the access_token used in the request.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenResponse}
     */

  }, {
    key: "getTokenCurrent",
    value: function getTokenCurrent() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTokenCurrentWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all tokens belonging to a specific customer.
     * @param {Object} options
     * @param {String} options.customer_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TokenResponse>} and HTTP response
     */

  }, {
    key: "listTokensCustomerWithHttpInfo",
    value: function listTokensCustomerWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TokenResponse["default"]];
      return this.apiClient.callApi('/customer/{customer_id}/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all tokens belonging to a specific customer.
     * @param {Object} options
     * @param {String} options.customer_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TokenResponse>}
     */

  }, {
    key: "listTokensCustomer",
    value: function listTokensCustomer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTokensCustomerWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all tokens belonging to the authenticated user.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TokenResponse>} and HTTP response
     */

  }, {
    key: "listTokensUserWithHttpInfo",
    value: function listTokensUserWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TokenResponse["default"]];
      return this.apiClient.callApi('/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all tokens belonging to the authenticated user.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TokenResponse>}
     */

  }, {
    key: "listTokensUser",
    value: function listTokensUser() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTokensUserWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Revoke a specific token by its id.
     * @param {Object} options
     * @param {String} options.token_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "revokeTokenWithHttpInfo",
    value: function revokeTokenWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'token_id' is set.

      if (options['token_id'] === undefined || options['token_id'] === null) {
        throw new Error("Missing the required parameter 'token_id'.");
      }

      var pathParams = {
        'token_id': options['token_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tokens/{token_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Revoke a specific token by its id.
     * @param {Object} options
     * @param {String} options.token_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "revokeToken",
    value: function revokeToken() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.revokeTokenWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Revoke a token that is used to authenticate the request.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "revokeTokenCurrentWithHttpInfo",
    value: function revokeTokenCurrentWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tokens/self', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Revoke a token that is used to authenticate the request.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "revokeTokenCurrent",
    value: function revokeTokenCurrent() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.revokeTokenCurrentWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TokensApi;
}();

exports["default"] = TokensApi;