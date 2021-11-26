"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiffResponse = _interopRequireDefault(require("../model/DiffResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Diff service.
* @module api/DiffApi
* @version 3.0.0-alpha1
*/
var DiffApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DiffApi. 
  * @alias module:api/DiffApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DiffApi(apiClient) {
    _classCallCheck(this, DiffApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Get diff between two versions.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.from_version_id - The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
   * @param {Number} options.to_version_id - The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
   * @param {module:model/String} [options.format='text'] - Optional method to format the diff field.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DiffResponse} and HTTP response
   */


  _createClass(DiffApi, [{
    key: "diffServiceVersionsWithHttpInfo",
    value: function diffServiceVersionsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'from_version_id' is set.


      if (options['from_version_id'] === undefined || options['from_version_id'] === null) {
        throw new Error("Missing the required parameter 'from_version_id'.");
      } // Verify the required parameter 'to_version_id' is set.


      if (options['to_version_id'] === undefined || options['to_version_id'] === null) {
        throw new Error("Missing the required parameter 'to_version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'from_version_id': options['from_version_id'],
        'to_version_id': options['to_version_id']
      };
      var queryParams = {
        'format': options['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DiffResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/diff/from/{from_version_id}/to/{to_version_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get diff between two versions.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.from_version_id - The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
     * @param {Number} options.to_version_id - The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
     * @param {module:model/String} [options.format='text'] - Optional method to format the diff field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DiffResponse}
     */

  }, {
    key: "diffServiceVersions",
    value: function diffServiceVersions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.diffServiceVersionsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DiffApi;
}();

exports["default"] = DiffApi;