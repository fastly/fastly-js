"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("../model/Pagination"));

var _Star = _interopRequireDefault(require("../model/Star"));

var _StarResponse = _interopRequireDefault(require("../model/StarResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Star service.
* @module api/StarApi
* @version 3.0.0-alpha1
*/
var StarApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StarApi. 
  * @alias module:api/StarApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StarApi(apiClient) {
    _classCallCheck(this, StarApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create star.
   * @param {Object} options
   * @param {module:model/Star} [options.star]
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StarResponse} and HTTP response
   */


  _createClass(StarApi, [{
    key: "createServiceStarWithHttpInfo",
    value: function createServiceStarWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = options['star'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = _StarResponse["default"];
      return this.apiClient.callApi('/stars', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create star.
     * @param {Object} options
     * @param {module:model/Star} [options.star]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StarResponse}
     */

  }, {
    key: "createServiceStar",
    value: function createServiceStar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createServiceStarWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete star.
     * @param {Object} options
     * @param {String} options.star_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteServiceStarWithHttpInfo",
    value: function deleteServiceStarWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'star_id' is set.

      if (options['star_id'] === undefined || options['star_id'] === null) {
        throw new Error("Missing the required parameter 'star_id'.");
      }

      var pathParams = {
        'star_id': options['star_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/stars/{star_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete star.
     * @param {Object} options
     * @param {String} options.star_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteServiceStar",
    value: function deleteServiceStar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteServiceStarWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Show star.
     * @param {Object} options
     * @param {String} options.star_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StarResponse} and HTTP response
     */

  }, {
    key: "getServiceStarWithHttpInfo",
    value: function getServiceStarWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'star_id' is set.

      if (options['star_id'] === undefined || options['star_id'] === null) {
        throw new Error("Missing the required parameter 'star_id'.");
      }

      var pathParams = {
        'star_id': options['star_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _StarResponse["default"];
      return this.apiClient.callApi('/stars/{star_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Show star.
     * @param {Object} options
     * @param {String} options.star_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StarResponse}
     */

  }, {
    key: "getServiceStar",
    value: function getServiceStar() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getServiceStarWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List stars.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pagination} and HTTP response
     */

  }, {
    key: "listServiceStarsWithHttpInfo",
    value: function listServiceStarsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _Pagination["default"];
      return this.apiClient.callApi('/stars', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List stars.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pagination}
     */

  }, {
    key: "listServiceStars",
    value: function listServiceStars() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listServiceStarsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return StarApi;
}();

exports["default"] = StarApi;