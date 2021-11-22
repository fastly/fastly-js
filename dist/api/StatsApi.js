"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Stats = _interopRequireDefault(require("../model/Stats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Stats service.
* @module api/StatsApi
* @version 3.0.0-alpha1
*/
var StatsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StatsApi. 
  * @alias module:api/StatsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StatsApi(apiClient) {
    _classCallCheck(this, StatsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Get the stats from a service for a block of time. This lists all stats by PoP location, starting with AMS. This call requires parameters to select block of time to query. Use either a timestamp range (using start_time and end_time) or a specified month/year combo (using month and year).
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {String} [options.month] - 2-digit month.
   * @param {String} [options.year] - 4-digit year.
   * @param {Number} [options.start_time] - Epoch timestamp. Limits the results returned.
   * @param {Number} [options.end_time] - Epoch timestamp. Limits the results returned.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Stats} and HTTP response
   */


  _createClass(StatsApi, [{
    key: "getServiceStatsWithHttpInfo",
    value: function getServiceStatsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {
        'month': options['month'],
        'year': options['year'],
        'start_time': options['start_time'],
        'end_time': options['end_time']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Stats["default"];
      return this.apiClient.callApi('/service/{service_id}/stats/summary', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the stats from a service for a block of time. This lists all stats by PoP location, starting with AMS. This call requires parameters to select block of time to query. Use either a timestamp range (using start_time and end_time) or a specified month/year combo (using month and year).
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} [options.month] - 2-digit month.
     * @param {String} [options.year] - 4-digit year.
     * @param {Number} [options.start_time] - Epoch timestamp. Limits the results returned.
     * @param {Number} [options.end_time] - Epoch timestamp. Limits the results returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Stats}
     */

  }, {
    key: "getServiceStats",
    value: function getServiceStats() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getServiceStatsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return StatsApi;
}();

exports["default"] = StatsApi;