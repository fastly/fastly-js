"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PurgeResponse = _interopRequireDefault(require("../model/PurgeResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Purge service.
* @module api/PurgeApi
* @version 3.0.0-alpha1
*/
var PurgeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PurgeApi. 
  * @alias module:api/PurgeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PurgeApi(apiClient) {
    _classCallCheck(this, PurgeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Instant Purge a particular service of items tagged with surrogate keys. Up to 256 surrogate keys can be purged in one batch request. As an alternative to sending the keys in a JSON object in the body of the request, this endpoint also supports listing keys in a <code>Surrogate-Key</code> request header, e.g. <code>Surrogate-Key: key_1 key_2 key_3</code>. 
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} [options.fastly_soft_purge=1] - Optional header indicating that the operation should be a 'soft' purge, which marks the affected object as stale rather than making it inaccessible.
   * @param {String} [options.surrogate_key] - Purge multiple surrogate key tags using a request header. Not required if a JSON POST body is specified.
   * @param {module:model/PurgeResponse} [options.purge_response]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
   */


  _createClass(PurgeApi, [{
    key: "bulkPurgeTagWithHttpInfo",
    value: function bulkPurgeTagWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['purge_response']; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {
        'Fastly-Soft-Purge': options['fastly_soft_purge'],
        'Surrogate-Key': options['surrogate_key']
      };
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/service/{service_id}/purge', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Instant Purge a particular service of items tagged with surrogate keys. Up to 256 surrogate keys can be purged in one batch request. As an alternative to sending the keys in a JSON object in the body of the request, this endpoint also supports listing keys in a <code>Surrogate-Key</code> request header, e.g. <code>Surrogate-Key: key_1 key_2 key_3</code>. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} [options.fastly_soft_purge=1] - Optional header indicating that the operation should be a 'soft' purge, which marks the affected object as stale rather than making it inaccessible.
     * @param {String} [options.surrogate_key] - Purge multiple surrogate key tags using a request header. Not required if a JSON POST body is specified.
     * @param {module:model/PurgeResponse} [options.purge_response]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "bulkPurgeTag",
    value: function bulkPurgeTag() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.bulkPurgeTagWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Instant Purge everything from a service.  Purge-all requests cannot be done in soft mode and will always immediately invalidate all cached content associated with the service. To do a soft-purge-all, consider applying a constant [surrogate key](https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys) tag (e.g., `\"all\"`) to all objects. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "purgeAllWithHttpInfo",
    value: function purgeAllWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/purge_all', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Instant Purge everything from a service.  Purge-all requests cannot be done in soft mode and will always immediately invalidate all cached content associated with the service. To do a soft-purge-all, consider applying a constant [surrogate key](https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys) tag (e.g., `\"all\"`) to all objects. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "purgeAll",
    value: function purgeAll() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.purgeAllWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Instant Purge an individual URL.
     * @param {Object} options
     * @param {String} options.host - The hostname for the content you'll be purging.
     * @param {Number} [options.fastly_soft_purge=1] - Optional header indicating that the operation should be a 'soft' purge, which marks the affected object as stale rather than making it inaccessible.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PurgeResponse} and HTTP response
     */

  }, {
    key: "purgeSingleUrlWithHttpInfo",
    value: function purgeSingleUrlWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'host' is set.

      if (options['host'] === undefined || options['host'] === null) {
        throw new Error("Missing the required parameter 'host'.");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Fastly-Soft-Purge': options['fastly_soft_purge'],
        'Host': options['host']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PurgeResponse["default"];
      return this.apiClient.callApi('/*', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Instant Purge an individual URL.
     * @param {Object} options
     * @param {String} options.host - The hostname for the content you'll be purging.
     * @param {Number} [options.fastly_soft_purge=1] - Optional header indicating that the operation should be a 'soft' purge, which marks the affected object as stale rather than making it inaccessible.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PurgeResponse}
     */

  }, {
    key: "purgeSingleUrl",
    value: function purgeSingleUrl() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.purgeSingleUrlWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Instant Purge a particular service of items tagged with a Surrogate Key. Only one surrogate key can be purged at a time. Multiple keys can be purged using a batch surrogate key purge request.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.surrogate_key - Surrogate keys are used to efficiently purge content from cache. Instead of purging your entire site or individual URLs, you can tag related assets (like all images and descriptions associated with a single product) with surrogate keys, and these grouped URLs can be purged in a single request.
     * @param {Number} [options.fastly_soft_purge=1] - Optional header indicating that the operation should be a 'soft' purge, which marks the affected object as stale rather than making it inaccessible.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PurgeResponse} and HTTP response
     */

  }, {
    key: "purgeTagWithHttpInfo",
    value: function purgeTagWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'surrogate_key' is set.


      if (options['surrogate_key'] === undefined || options['surrogate_key'] === null) {
        throw new Error("Missing the required parameter 'surrogate_key'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'surrogate_key': options['surrogate_key']
      };
      var queryParams = {};
      var headerParams = {
        'Fastly-Soft-Purge': options['fastly_soft_purge']
      };
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PurgeResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/purge/{surrogate_key}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Instant Purge a particular service of items tagged with a Surrogate Key. Only one surrogate key can be purged at a time. Multiple keys can be purged using a batch surrogate key purge request.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.surrogate_key - Surrogate keys are used to efficiently purge content from cache. Instead of purging your entire site or individual URLs, you can tag related assets (like all images and descriptions associated with a single product) with surrogate keys, and these grouped URLs can be purged in a single request.
     * @param {Number} [options.fastly_soft_purge=1] - Optional header indicating that the operation should be a 'soft' purge, which marks the affected object as stale rather than making it inaccessible.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PurgeResponse}
     */

  }, {
    key: "purgeTag",
    value: function purgeTag() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.purgeTagWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PurgeApi;
}();

exports["default"] = PurgeApi;