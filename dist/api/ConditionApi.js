"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConditionResponse = _interopRequireDefault(require("../model/ConditionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Condition service.
* @module api/ConditionApi
* @version 3.0.0-alpha1
*/
var ConditionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConditionApi. 
  * @alias module:api/ConditionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConditionApi(apiClient) {
    _classCallCheck(this, ConditionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Creates a new condition.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.comment] - A freeform descriptive note.
   * @param {String} [options.name] - Name of the condition. Required.
   * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
   * @param {String} [options.statement] - A conditional expression in VCL used to determine if the condition is met.
   * @param {module:model/String} [options.type] - Type of the condition. Required.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConditionResponse} and HTTP response
   */


  _createClass(ConditionApi, [{
    key: "createConditionWithHttpInfo",
    value: function createConditionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'comment': options['comment'],
        'name': options['name'],
        'priority': options['priority'],
        'statement': options['statement'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ConditionResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/condition', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a new condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - Name of the condition. Required.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @param {String} [options.statement] - A conditional expression in VCL used to determine if the condition is met.
     * @param {module:model/String} [options.type] - Type of the condition. Required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConditionResponse}
     */

  }, {
    key: "createCondition",
    value: function createCondition() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createConditionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes the specified condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.condition_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteConditionWithHttpInfo",
    value: function deleteConditionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'condition_name' is set.


      if (options['condition_name'] === undefined || options['condition_name'] === null) {
        throw new Error("Missing the required parameter 'condition_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'condition_name': options['condition_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/condition/{condition_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes the specified condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.condition_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteCondition",
    value: function deleteCondition() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteConditionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets the specified condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.condition_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConditionResponse} and HTTP response
     */

  }, {
    key: "getConditionWithHttpInfo",
    value: function getConditionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'condition_name' is set.


      if (options['condition_name'] === undefined || options['condition_name'] === null) {
        throw new Error("Missing the required parameter 'condition_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'condition_name': options['condition_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ConditionResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/condition/{condition_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets the specified condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.condition_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConditionResponse}
     */

  }, {
    key: "getCondition",
    value: function getCondition() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getConditionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Gets all conditions for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConditionResponse>} and HTTP response
     */

  }, {
    key: "listConditionsWithHttpInfo",
    value: function listConditionsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ConditionResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/condition', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets all conditions for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConditionResponse>}
     */

  }, {
    key: "listConditions",
    value: function listConditions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listConditionsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates the specified condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.condition_name
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - Name of the condition. Required.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @param {String} [options.statement] - A conditional expression in VCL used to determine if the condition is met.
     * @param {module:model/String} [options.type] - Type of the condition. Required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConditionResponse} and HTTP response
     */

  }, {
    key: "updateConditionWithHttpInfo",
    value: function updateConditionWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'condition_name' is set.


      if (options['condition_name'] === undefined || options['condition_name'] === null) {
        throw new Error("Missing the required parameter 'condition_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'condition_name': options['condition_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'comment': options['comment'],
        'name': options['name'],
        'priority': options['priority'],
        'statement': options['statement'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ConditionResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/condition/{condition_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Updates the specified condition.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.condition_name
     * @param {String} [options.comment] - A freeform descriptive note.
     * @param {String} [options.name] - Name of the condition. Required.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @param {String} [options.statement] - A conditional expression in VCL used to determine if the condition is met.
     * @param {module:model/String} [options.type] - Type of the condition. Required.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConditionResponse}
     */

  }, {
    key: "updateCondition",
    value: function updateCondition() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateConditionWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ConditionApi;
}();

exports["default"] = ConditionApi;