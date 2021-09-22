"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafTagsResponse = _interopRequireDefault(require("../model/WafTagsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WafTags service.
* @module api/WafTagsApi
* @version 3.0.0-alpha1
*/
var WafTagsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WafTagsApi. 
  * @alias module:api/WafTagsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WafTagsApi(apiClient) {
    _classCallCheck(this, WafTagsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List all tags.
   * @param {Object} options
   * @param {String} [options.filter_name] - Limit the returned tags to a specific name.
   * @param {Number} [options.page_number] - Current page.
   * @param {Number} [options.page_size=20] - Number of records per page.
   * @param {module:model/String} [options.include='waf_rules'] - Include relationships. Optional.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafTagsResponse} and HTTP response
   */


  _createClass(WafTagsApi, [{
    key: "listWafTagsWithHttpInfo",
    value: function listWafTagsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[name]': options['filter_name'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _WafTagsResponse["default"];
      return this.apiClient.callApi('/waf/tags', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all tags.
     * @param {Object} options
     * @param {String} [options.filter_name] - Limit the returned tags to a specific name.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.include='waf_rules'] - Include relationships. Optional.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafTagsResponse}
     */

  }, {
    key: "listWafTags",
    value: function listWafTags() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listWafTagsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WafTagsApi;
}();

exports["default"] = WafTagsApi;