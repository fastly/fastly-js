"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsSubscription = _interopRequireDefault(require("../model/TlsSubscription"));

var _TlsSubscriptionResponse = _interopRequireDefault(require("../model/TlsSubscriptionResponse"));

var _TlsSubscriptionsResponse = _interopRequireDefault(require("../model/TlsSubscriptionsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsSubscriptions service.
* @module api/TlsSubscriptionsApi
* @version 3.0.0-alpha1
*/
var TlsSubscriptionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsSubscriptionsApi. 
  * @alias module:api/TlsSubscriptionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsSubscriptionsApi(apiClient) {
    _classCallCheck(this, TlsSubscriptionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.
   * @param {Object} options
   * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
   * @param {module:model/TlsSubscription} [options.tls_subscription]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionResponse} and HTTP response
   */


  _createClass(TlsSubscriptionsApi, [{
    key: "createTlsSubWithHttpInfo",
    value: function createTlsSubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_subscription'];
      var pathParams = {};
      var queryParams = {
        'force': options['force']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsSubscriptionResponse["default"];
      return this.apiClient.callApi('/tls/subscriptions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.
     * @param {Object} options
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionResponse}
     */

  }, {
    key: "createTlsSub",
    value: function createTlsSub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createTlsSubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteTlsSubWithHttpInfo",
    value: function deleteTlsSubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_subscription_id' is set.

      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }

      var pathParams = {
        'tls_subscription_id': options['tls_subscription_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tls/subscriptions/{tls_subscription_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteTlsSub",
    value: function deleteTlsSub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteTlsSubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show a TLS subscription.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations` and `tls_authorizations.globalsign_email_challenge`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionResponse} and HTTP response
     */

  }, {
    key: "getTlsSubWithHttpInfo",
    value: function getTlsSubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_subscription_id' is set.

      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }

      var pathParams = {
        'tls_subscription_id': options['tls_subscription_id']
      };
      var queryParams = {
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsSubscriptionResponse["default"];
      return this.apiClient.callApi('/tls/subscriptions/{tls_subscription_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show a TLS subscription.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations` and `tls_authorizations.globalsign_email_challenge`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionResponse}
     */

  }, {
    key: "getTlsSub",
    value: function getTlsSub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getTlsSubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all TLS subscriptions.
     * @param {Object} options
     * @param {String} [options.filter_state] - Limit the returned subscriptions by state. Valid values are pending, processing, issued, and renewing. Accepts parameters: not (e.g., filter[state][not]=renewing). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned subscriptions to those that include the specific domain.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations` and `tls_authorizations.globalsign_email_challenge`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionsResponse} and HTTP response
     */

  }, {
    key: "listTlsSubsWithHttpInfo",
    value: function listTlsSubsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[state]': options['filter_state'],
        'filter[tls_domains.id]': options['filter_tls_domains_id'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'sort': options['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsSubscriptionsResponse["default"];
      return this.apiClient.callApi('/tls/subscriptions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all TLS subscriptions.
     * @param {Object} options
     * @param {String} [options.filter_state] - Limit the returned subscriptions by state. Valid values are pending, processing, issued, and renewing. Accepts parameters: not (e.g., filter[state][not]=renewing). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned subscriptions to those that include the specific domain.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations` and `tls_authorizations.globalsign_email_challenge`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionsResponse}
     */

  }, {
    key: "listTlsSubs",
    value: function listTlsSubs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listTlsSubsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Change the TLS domains or common name associated with this subscription, or update the TLS configuration for this set of domains.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsSubscriptionResponse} and HTTP response
     */

  }, {
    key: "patchTlsSubWithHttpInfo",
    value: function patchTlsSubWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['tls_subscription']; // Verify the required parameter 'tls_subscription_id' is set.

      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      }

      var pathParams = {
        'tls_subscription_id': options['tls_subscription_id']
      };
      var queryParams = {
        'force': options['force']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _TlsSubscriptionResponse["default"];
      return this.apiClient.callApi('/tls/subscriptions/{tls_subscription_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Change the TLS domains or common name associated with this subscription, or update the TLS configuration for this set of domains.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {Boolean} [options.force] - A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
     * @param {module:model/TlsSubscription} [options.tls_subscription]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsSubscriptionResponse}
     */

  }, {
    key: "patchTlsSub",
    value: function patchTlsSub() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.patchTlsSubWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsSubscriptionsApi;
}();

exports["default"] = TlsSubscriptionsApi;