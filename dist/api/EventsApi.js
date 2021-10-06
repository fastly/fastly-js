"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventResponse = _interopRequireDefault(require("../model/EventResponse"));

var _EventsResponse = _interopRequireDefault(require("../model/EventsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Events service.
* @module api/EventsApi
* @version 3.0.0-alpha1
*/
var EventsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EventsApi. 
  * @alias module:api/EventsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EventsApi(apiClient) {
    _classCallCheck(this, EventsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Get a specific event.
   * @param {Object} options
   * @param {String} options.event_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventResponse} and HTTP response
   */


  _createClass(EventsApi, [{
    key: "getEventWithHttpInfo",
    value: function getEventWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'event_id' is set.

      if (options['event_id'] === undefined || options['event_id'] === null) {
        throw new Error("Missing the required parameter 'event_id'.");
      }

      var pathParams = {
        'event_id': options['event_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _EventResponse["default"];
      return this.apiClient.callApi('/events/{event_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a specific event.
     * @param {Object} options
     * @param {String} options.event_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponse}
     */

  }, {
    key: "getEvent",
    value: function getEvent() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getEventWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.
     * @param {Object} options
     * @param {String} [options.filter_event_type] - Limit the returned events to a specific `event_type`.
     * @param {String} [options.filter_customer_id] - Limit the results returned to a specific customer.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_user_id] - Limit the results returned to a specific user.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventsResponse} and HTTP response
     */

  }, {
    key: "listEventsWithHttpInfo",
    value: function listEventsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter[event_type]': options['filter_event_type'],
        'filter[customer_id]': options['filter_customer_id'],
        'filter[service_id]': options['filter_service_id'],
        'filter[user_id]': options['filter_user_id'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'sort': options['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/vnd.api+json'];
      var returnType = _EventsResponse["default"];
      return this.apiClient.callApi('/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.
     * @param {Object} options
     * @param {String} [options.filter_event_type] - Limit the returned events to a specific `event_type`.
     * @param {String} [options.filter_customer_id] - Limit the results returned to a specific customer.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_user_id] - Limit the results returned to a specific user.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventsResponse}
     */

  }, {
    key: "listEvents",
    value: function listEvents() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listEventsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EventsApi;
}();

exports["default"] = EventsApi;