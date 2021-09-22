"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TlsSubscriptionsOther service.
* @module api/TlsSubscriptionsOtherApi
* @version 3.0.0-alpha1
*/
var TlsSubscriptionsOtherApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TlsSubscriptionsOtherApi. 
  * @alias module:api/TlsSubscriptionsOtherApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TlsSubscriptionsOtherApi(apiClient) {
    _classCallCheck(this, TlsSubscriptionsOtherApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.
   * @param {Object} options
   * @param {String} options.tls_subscription_id
   * @param {String} options.globalsign_email_challenge_id
   * @param {String} options.tls_authorization_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(TlsSubscriptionsOtherApi, [{
    key: "deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeIdWithHttpInfo",
    value: function deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeIdWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'tls_subscription_id' is set.

      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      } // Verify the required parameter 'globalsign_email_challenge_id' is set.


      if (options['globalsign_email_challenge_id'] === undefined || options['globalsign_email_challenge_id'] === null) {
        throw new Error("Missing the required parameter 'globalsign_email_challenge_id'.");
      } // Verify the required parameter 'tls_authorization_id' is set.


      if (options['tls_authorization_id'] === undefined || options['tls_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'tls_authorization_id'.");
      }

      var pathParams = {
        'tls_subscription_id': options['tls_subscription_id'],
        'globalsign_email_challenge_id': options['globalsign_email_challenge_id'],
        'tls_authorization_id': options['tls_authorization_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/tls/subscriptions/{tls_subscription_id}/authorizations/{tls_authorization_id}/globalsign_email_challenges/{globalsign_email_challenge_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {String} options.globalsign_email_challenge_id
     * @param {String} options.tls_authorization_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId",
    value: function deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeIdWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Creates an email challenge for domain on a GlobalSign subscription. An email challenge will generate an email that can be used to validate domain ownership. If this challenge is created, then the domain can only be validated using email for the given subscription.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {String} options.tls_authorization_id
     * @param {Object} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesWithHttpInfo",
    value: function postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['body']; // Verify the required parameter 'tls_subscription_id' is set.

      if (options['tls_subscription_id'] === undefined || options['tls_subscription_id'] === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id'.");
      } // Verify the required parameter 'tls_authorization_id' is set.


      if (options['tls_authorization_id'] === undefined || options['tls_authorization_id'] === null) {
        throw new Error("Missing the required parameter 'tls_authorization_id'.");
      }

      var pathParams = {
        'tls_subscription_id': options['tls_subscription_id'],
        'tls_authorization_id': options['tls_authorization_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/tls/subscriptions/{tls_subscription_id}/authorizations/{tls_authorization_id}/globalsign_email_challenges', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates an email challenge for domain on a GlobalSign subscription. An email challenge will generate an email that can be used to validate domain ownership. If this challenge is created, then the domain can only be validated using email for the given subscription.
     * @param {Object} options
     * @param {String} options.tls_subscription_id
     * @param {String} options.tls_authorization_id
     * @param {Object} [options.body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges",
    value: function postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TlsSubscriptionsOtherApi;
}();

exports["default"] = TlsSubscriptionsOtherApi;