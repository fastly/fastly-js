"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingAddress = _interopRequireDefault(require("../model/BillingAddress"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* BillingAddress service.
* @module api/BillingAddressApi
* @version 3.0.0-alpha1
*/
var BillingAddressApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BillingAddressApi. 
  * @alias module:api/BillingAddressApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BillingAddressApi(apiClient) {
    _classCallCheck(this, BillingAddressApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Add a billing address to a customer.
   * @param {Object} options
   * @param {String} options.customer_id
   * @param {module:model/InlineObject} [options.inline_object]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingAddress} and HTTP response
   */


  _createClass(BillingAddressApi, [{
    key: "addBillingAddrWithHttpInfo",
    value: function addBillingAddrWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['inline_object']; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _BillingAddress["default"];
      return this.apiClient.callApi('/customer/{customer_id}/billing_address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add a billing address to a customer.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {module:model/InlineObject} [options.inline_object]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingAddress}
     */

  }, {
    key: "addBillingAddr",
    value: function addBillingAddr() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.addBillingAddrWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a customer's billing address.
     * @param {Object} options
     * @param {String} options.customer_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteBillingAddrWithHttpInfo",
    value: function deleteBillingAddrWithHttpInfo() {
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
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/customer/{customer_id}/billing_address', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a customer's billing address.
     * @param {Object} options
     * @param {String} options.customer_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteBillingAddr",
    value: function deleteBillingAddr() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteBillingAddrWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a customer's billing address.
     * @param {Object} options
     * @param {String} options.customer_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingAddress} and HTTP response
     */

  }, {
    key: "getBillingAddrWithHttpInfo",
    value: function getBillingAddrWithHttpInfo() {
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
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _BillingAddress["default"];
      return this.apiClient.callApi('/customer/{customer_id}/billing_address', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a customer's billing address.
     * @param {Object} options
     * @param {String} options.customer_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingAddress}
     */

  }, {
    key: "getBillingAddr",
    value: function getBillingAddr() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getBillingAddrWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a customer's billing address. You may update only part of the customer's billing address.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {module:model/InlineObject1} [options.inline_object1]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingAddress} and HTTP response
     */

  }, {
    key: "updateBillingAddrWithHttpInfo",
    value: function updateBillingAddrWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['inline_object1']; // Verify the required parameter 'customer_id' is set.

      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      var pathParams = {
        'customer_id': options['customer_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _BillingAddress["default"];
      return this.apiClient.callApi('/customer/{customer_id}/billing_address', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a customer's billing address. You may update only part of the customer's billing address.
     * @param {Object} options
     * @param {String} options.customer_id
     * @param {module:model/InlineObject1} [options.inline_object1]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingAddress}
     */

  }, {
    key: "updateBillingAddr",
    value: function updateBillingAddr() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateBillingAddrWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BillingAddressApi;
}();

exports["default"] = BillingAddressApi;