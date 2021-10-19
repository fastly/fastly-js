"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DictionaryInfoResponse = _interopRequireDefault(require("../model/DictionaryInfoResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DictionaryInfo service.
* @module api/DictionaryInfoApi
* @version 3.0.0-alpha1
*/
var DictionaryInfoApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DictionaryInfoApi. 
  * @alias module:api/DictionaryInfoApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DictionaryInfoApi(apiClient) {
    _classCallCheck(this, DictionaryInfoApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Retrieve metadata for a single dictionary by ID for a version and service.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} options.dictionary_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DictionaryInfoResponse} and HTTP response
   */


  _createClass(DictionaryInfoApi, [{
    key: "getDictionaryInfoWithHttpInfo",
    value: function getDictionaryInfoWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'dictionary_id' is set.


      if (options['dictionary_id'] === undefined || options['dictionary_id'] === null) {
        throw new Error("Missing the required parameter 'dictionary_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'dictionary_id': options['dictionary_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DictionaryInfoResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve metadata for a single dictionary by ID for a version and service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.dictionary_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DictionaryInfoResponse}
     */

  }, {
    key: "getDictionaryInfo",
    value: function getDictionaryInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getDictionaryInfoWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DictionaryInfoApi;
}();

exports["default"] = DictionaryInfoApi;