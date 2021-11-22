"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Realtime = _interopRequireDefault(require("../model/Realtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Realtime service.
* @module api/RealtimeApi
* @version 3.0.0-alpha1
*/
var RealtimeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RealtimeApi. 
  * @alias module:api/RealtimeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RealtimeApi(apiClient) {
    _classCallCheck(this, RealtimeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Get data for the 120 seconds preceding the latest timestamp available for a service.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Realtime} and HTTP response
   */


  _createClass(RealtimeApi, [{
    key: "getStatsLast120SecondsWithHttpInfo",
    value: function getStatsLast120SecondsWithHttpInfo() {
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
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Realtime["default"];
      return this.apiClient.callApi('/v1/channel/{service_id}/ts/h', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Realtime}
     */

  }, {
    key: "getStatsLast120Seconds",
    value: function getStatsLast120Seconds() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getStatsLast120SecondsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of `max_entries` entries.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.max_entries - Maximum number of results to show.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Realtime} and HTTP response
     */

  }, {
    key: "getStatsLast120SecondsLimitEntriesWithHttpInfo",
    value: function getStatsLast120SecondsLimitEntriesWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'max_entries' is set.


      if (options['max_entries'] === undefined || options['max_entries'] === null) {
        throw new Error("Missing the required parameter 'max_entries'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'max_entries': options['max_entries']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Realtime["default"];
      return this.apiClient.callApi('/v1/channel/{service_id}/ts/h/limit/{max_entries}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of `max_entries` entries.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.max_entries - Maximum number of results to show.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Realtime}
     */

  }, {
    key: "getStatsLast120SecondsLimitEntries",
    value: function getStatsLast120SecondsLimitEntries() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getStatsLast120SecondsLimitEntriesWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get real-time data for the last second. For the first request, the timestamp can be `0`. The response will then return a new timestamp field, which should be used for the next request.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.timestamp_in_seconds - Timestamp in seconds (Unix epoch time).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Realtime} and HTTP response
     */

  }, {
    key: "getStatsLastSecondWithHttpInfo",
    value: function getStatsLastSecondWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'timestamp_in_seconds' is set.


      if (options['timestamp_in_seconds'] === undefined || options['timestamp_in_seconds'] === null) {
        throw new Error("Missing the required parameter 'timestamp_in_seconds'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'timestamp_in_seconds': options['timestamp_in_seconds']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Realtime["default"];
      return this.apiClient.callApi('/v1/channel/{service_id}/ts/{timestamp_in_seconds}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get real-time data for the last second. For the first request, the timestamp can be `0`. The response will then return a new timestamp field, which should be used for the next request.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.timestamp_in_seconds - Timestamp in seconds (Unix epoch time).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Realtime}
     */

  }, {
    key: "getStatsLastSecond",
    value: function getStatsLastSecond() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getStatsLastSecondWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RealtimeApi;
}();

exports["default"] = RealtimeApi;