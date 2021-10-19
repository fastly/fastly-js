"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RateLimiterResponse = _interopRequireDefault(require("../model/RateLimiterResponse"));

var _RateLimiterResponse2 = _interopRequireDefault(require("../model/RateLimiterResponse1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RateLimiter service.
* @module api/RateLimiterApi
* @version 3.0.0-alpha1
*/
var RateLimiterApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RateLimiterApi. 
  * @alias module:api/RateLimiterApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RateLimiterApi(apiClient) {
    _classCallCheck(this, RateLimiterApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a rate limiter for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
   * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
   * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
   * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
   * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
   * @param {String} [options.name] - A human readable name for the rate limiting rule.
   * @param {Number} [options.penalty_box_duration] - Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
   * @param {module:model/RateLimiterResponse1} [options.response]
   * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
   * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
   * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
   * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateLimiterResponse} and HTTP response
   */


  _createClass(RateLimiterApi, [{
    key: "createRateLimiterWithHttpInfo",
    value: function createRateLimiterWithHttpInfo() {
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
        'action': options['action'],
        'client_key': this.apiClient.buildCollectionParam(options['client_key'], 'csv'),
        'feature_revision': options['feature_revision'],
        'http_methods': this.apiClient.buildCollectionParam(options['http_methods'], 'csv'),
        'logger_type': options['logger_type'],
        'name': options['name'],
        'penalty_box_duration': options['penalty_box_duration'],
        'response': options['response'],
        'response_object_name': options['response_object_name'],
        'rps_limit': options['rps_limit'],
        'uri_dictionary_name': options['uri_dictionary_name'],
        'window_size': options['window_size']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _RateLimiterResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/rate-limiters', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a rate limiter for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateLimiterResponse}
     */

  }, {
    key: "createRateLimiter",
    value: function createRateLimiter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createRateLimiterWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteRateLimiterWithHttpInfo",
    value: function deleteRateLimiterWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'rate_limiter_id' is set.

      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      var pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/rate-limiters/{rate_limiter_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteRateLimiter",
    value: function deleteRateLimiter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteRateLimiterWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateLimiterResponse} and HTTP response
     */

  }, {
    key: "getRateLimiterWithHttpInfo",
    value: function getRateLimiterWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'rate_limiter_id' is set.

      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      var pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RateLimiterResponse["default"];
      return this.apiClient.callApi('/rate-limiters/{rate_limiter_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateLimiterResponse}
     */

  }, {
    key: "getRateLimiter",
    value: function getRateLimiter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getRateLimiterWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all rate limiters for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RateLimiterResponse>} and HTTP response
     */

  }, {
    key: "listRateLimitersWithHttpInfo",
    value: function listRateLimitersWithHttpInfo() {
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
      var returnType = [_RateLimiterResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/rate-limiters', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all rate limiters for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/RateLimiterResponse>}
     */

  }, {
    key: "listRateLimiters",
    value: function listRateLimiters() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listRateLimitersWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RateLimiterResponse} and HTTP response
     */

  }, {
    key: "updateRateLimiterWithHttpInfo",
    value: function updateRateLimiterWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'rate_limiter_id' is set.

      if (options['rate_limiter_id'] === undefined || options['rate_limiter_id'] === null) {
        throw new Error("Missing the required parameter 'rate_limiter_id'.");
      }

      var pathParams = {
        'rate_limiter_id': options['rate_limiter_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'action': options['action'],
        'client_key': this.apiClient.buildCollectionParam(options['client_key'], 'csv'),
        'feature_revision': options['feature_revision'],
        'http_methods': this.apiClient.buildCollectionParam(options['http_methods'], 'csv'),
        'logger_type': options['logger_type'],
        'name': options['name'],
        'penalty_box_duration': options['penalty_box_duration'],
        'response': options['response'],
        'response_object_name': options['response_object_name'],
        'rps_limit': options['rps_limit'],
        'uri_dictionary_name': options['uri_dictionary_name'],
        'window_size': options['window_size']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _RateLimiterResponse["default"];
      return this.apiClient.callApi('/rate-limiters/{rate_limiter_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a rate limiter by its ID.
     * @param {Object} options
     * @param {String} options.rate_limiter_id
     * @param {module:model/String} [options.action] - The action to take when a rate limiter violation is detected.
     * @param {Array.<String>} [options.client_key] - Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
     * @param {Number} [options.feature_revision] - Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
     * @param {Array.<module:model/String>} [options.http_methods] - Array of HTTP methods to apply rate limiting to.
     * @param {module:model/String} [options.logger_type] - Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
     * @param {String} [options.name] - A human readable name for the rate limiting rule.
     * @param {Number} [options.penalty_box_duration] - Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
     * @param {module:model/RateLimiterResponse1} [options.response]
     * @param {String} [options.response_object_name] - Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
     * @param {Number} [options.rps_limit] - Upper limit of requests per second allowed by the rate limiter.
     * @param {String} [options.uri_dictionary_name] - The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
     * @param {module:model/Number} [options.window_size] - Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RateLimiterResponse}
     */

  }, {
    key: "updateRateLimiter",
    value: function updateRateLimiter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateRateLimiterWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RateLimiterApi;
}();

exports["default"] = RateLimiterApi;