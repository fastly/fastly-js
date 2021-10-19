"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Content = _interopRequireDefault(require("../model/Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Content service.
* @module api/ContentApi
* @version 3.0.0-alpha1
*/
var ContentApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContentApi. 
  * @alias module:api/ContentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContentApi(apiClient) {
    _classCallCheck(this, ContentApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.
   * @param {Object} options
   * @param {String} [options.url] - Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Content>} and HTTP response
   */


  _createClass(ContentApi, [{
    key: "contentCheckWithHttpInfo",
    value: function contentCheckWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'url': options['url']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Content["default"]];
      return this.apiClient.callApi('/content/edge_check', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve headers and MD5 hash of the content for a particular URL from each Fastly edge server. This API is limited to 200 requests per hour.
     * @param {Object} options
     * @param {String} [options.url] - Full URL (host and path) to check on all nodes. if protocol is omitted, http will be assumed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Content>}
     */

  }, {
    key: "contentCheck",
    value: function contentCheck() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.contentCheckWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContentApi;
}();

exports["default"] = ContentApi;