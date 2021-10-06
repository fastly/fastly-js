"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Historical = _interopRequireDefault(require("../model/Historical"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Historical service.
* @module api/HistoricalApi
* @version 3.0.0-alpha1
*/
var HistoricalApi = /*#__PURE__*/function () {
  /**
  * Constructs a new HistoricalApi. 
  * @alias module:api/HistoricalApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function HistoricalApi(apiClient) {
    _classCallCheck(this, HistoricalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Fetches historical stats for each of your Fastly services and groups the results by service ID.
   * @param {Object} options
   * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
   * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
   * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
   * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
   */


  _createClass(HistoricalApi, [{
    key: "getHistStatsWithHttpInfo",
    value: function getHistStatsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetches historical stats for each of your Fastly services and groups the results by service ID.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getHistStats",
    value: function getHistStats() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHistStatsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Fetches historical stats information aggregated across all of your Fastly services.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getHistStatsAggregatedWithHttpInfo",
    value: function getHistStatsAggregatedWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/aggregate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetches historical stats information aggregated across all of your Fastly services.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getHistStatsAggregated",
    value: function getHistStatsAggregated() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHistStatsAggregatedWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Fetches the specified field from the historical stats for each of your services and groups the results by service ID.
     * @param {Object} options
     * @param {String} options.field - Name of the stats field.
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getHistStatsFieldWithHttpInfo",
    value: function getHistStatsFieldWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'field' is set.

      if (options['field'] === undefined || options['field'] === null) {
        throw new Error("Missing the required parameter 'field'.");
      }

      var pathParams = {
        'field': options['field']
      };
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/field/{field}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetches the specified field from the historical stats for each of your services and groups the results by service ID.
     * @param {Object} options
     * @param {String} options.field - Name of the stats field.
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getHistStatsField",
    value: function getHistStatsField() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHistStatsFieldWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Fetches historical stats for a given service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getHistStatsServiceWithHttpInfo",
    value: function getHistStatsServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }

      var pathParams = {
        'service_id': options['service_id']
      };
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/service/{service_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetches historical stats for a given service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getHistStatsService",
    value: function getHistStatsService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHistStatsServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Fetches the specified field from the historical stats for a given service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.field - Name of the stats field.
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getHistStatsServiceFieldWithHttpInfo",
    value: function getHistStatsServiceFieldWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'field' is set.


      if (options['field'] === undefined || options['field'] === null) {
        throw new Error("Missing the required parameter 'field'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'field': options['field']
      };
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/service/{service_id}/field/{field}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetches the specified field from the historical stats for a given service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.field - Name of the stats field.
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getHistStatsServiceField",
    value: function getHistStatsServiceField() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHistStatsServiceFieldWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Fetches the list of codes for regions that are covered by the Fastly CDN service.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getRegionsWithHttpInfo",
    value: function getRegionsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/regions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetches the list of codes for regions that are covered by the Fastly CDN service.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getRegions",
    value: function getRegions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getRegionsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns usage information aggregated across all Fastly services and grouped by region.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getUsageWithHttpInfo",
    value: function getUsageWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/usage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns usage information aggregated across all Fastly services and grouped by region.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getUsage",
    value: function getUsage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getUsageWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns month-to-date usage details for a given month and year. Usage details are aggregated by service and across all Fastly services, and then grouped by region. This endpoint does not use the `from` or `to` fields for selecting the date for which data is requested. Instead, it uses `month` and `year` integer fields. Both fields are optional and default to the current month and year respectively. When set, an optional `billable_units` field will convert bandwidth to GB and divide requests by 10,000.
     * @param {Object} options
     * @param {String} [options.year] - 4-digit year.
     * @param {String} [options.month] - 2-digit month.
     * @param {Boolean} [options.billable_units] - If `true`, return results as billable units.
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getUsageMonthWithHttpInfo",
    value: function getUsageMonthWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'year': options['year'],
        'month': options['month'],
        'billable_units': options['billable_units'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/usage_by_month', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns month-to-date usage details for a given month and year. Usage details are aggregated by service and across all Fastly services, and then grouped by region. This endpoint does not use the `from` or `to` fields for selecting the date for which data is requested. Instead, it uses `month` and `year` integer fields. Both fields are optional and default to the current month and year respectively. When set, an optional `billable_units` field will convert bandwidth to GB and divide requests by 10,000.
     * @param {Object} options
     * @param {String} [options.year] - 4-digit year.
     * @param {String} [options.month] - 2-digit month.
     * @param {Boolean} [options.billable_units] - If `true`, return results as billable units.
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getUsageMonth",
    value: function getUsageMonth() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getUsageMonthWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Returns usage information aggregated by service and grouped by service and region.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Historical} and HTTP response
     */

  }, {
    key: "getUsageServiceWithHttpInfo",
    value: function getUsageServiceWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'from': options['from'],
        'to': options['to'],
        'by': options['by'],
        'region': options['region']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Historical["default"];
      return this.apiClient.callApi('/stats/usage_by_service', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Returns usage information aggregated by service and grouped by service and region.
     * @param {Object} options
     * @param {String} [options.from] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {String} [options.to] - Absolute, relative or epoch timestamp. Limits the results returned.
     * @param {module:model/String} [options.by='day'] - Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day. 
     * @param {module:model/String} [options.region] - Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Historical}
     */

  }, {
    key: "getUsageService",
    value: function getUsageService() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getUsageServiceWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return HistoricalApi;
}();

exports["default"] = HistoricalApi;