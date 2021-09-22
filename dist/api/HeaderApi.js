"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HeaderResponse = _interopRequireDefault(require("../model/HeaderResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Header service.
* @module api/HeaderApi
* @version 3.0.0-alpha1
*/
var HeaderApi = /*#__PURE__*/function () {
  /**
  * Constructs a new HeaderApi. 
  * @alias module:api/HeaderApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function HeaderApi(apiClient) {
    _classCallCheck(this, HeaderApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Creates a new Header object.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {module:model/String} [options.action] - Accepts a string value.
   * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
   * @param {String} [options.dst] - Header to set.
   * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
   * @param {String} [options.name] - A handle to refer to this Header object.
   * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
   * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
   * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
   * @param {String} [options.response_condition]
   * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
   * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
   * @param {module:model/String} [options.type] - Accepts a string value.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeaderResponse} and HTTP response
   */


  _createClass(HeaderApi, [{
    key: "createHeaderObjectWithHttpInfo",
    value: function createHeaderObjectWithHttpInfo() {
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
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'dst': options['dst'],
        'ignore_if_set': options['ignore_if_set'],
        'name': options['name'],
        'priority': options['priority'],
        'regex': options['regex'],
        'request_condition': options['request_condition'],
        'response_condition': options['response_condition'],
        'src': options['src'],
        'substitution': options['substitution'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _HeaderResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/header', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Creates a new Header object.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition]
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeaderResponse}
     */

  }, {
    key: "createHeaderObject",
    value: function createHeaderObject() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createHeaderObjectWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.header_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteHeaderObjectWithHttpInfo",
    value: function deleteHeaderObjectWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'header_name' is set.


      if (options['header_name'] === undefined || options['header_name'] === null) {
        throw new Error("Missing the required parameter 'header_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'header_name': options['header_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/header/{header_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.header_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteHeaderObject",
    value: function deleteHeaderObject() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteHeaderObjectWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.header_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeaderResponse} and HTTP response
     */

  }, {
    key: "getHeaderObjectWithHttpInfo",
    value: function getHeaderObjectWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'header_name' is set.


      if (options['header_name'] === undefined || options['header_name'] === null) {
        throw new Error("Missing the required parameter 'header_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'header_name': options['header_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HeaderResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/header/{header_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves a Header object by name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.header_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeaderResponse}
     */

  }, {
    key: "getHeaderObject",
    value: function getHeaderObject() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getHeaderObjectWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieves all Header objects for a particular Version of a Service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HeaderResponse>} and HTTP response
     */

  }, {
    key: "listHeaderObjectsWithHttpInfo",
    value: function listHeaderObjectsWithHttpInfo() {
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
      var returnType = [_HeaderResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/header', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieves all Header objects for a particular Version of a Service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HeaderResponse>}
     */

  }, {
    key: "listHeaderObjects",
    value: function listHeaderObjects() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listHeaderObjectsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Modifies an existing Header object by name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.header_name
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition]
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeaderResponse} and HTTP response
     */

  }, {
    key: "updateHeaderObjectWithHttpInfo",
    value: function updateHeaderObjectWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'header_name' is set.


      if (options['header_name'] === undefined || options['header_name'] === null) {
        throw new Error("Missing the required parameter 'header_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'header_name': options['header_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'action': options['action'],
        'cache_condition': options['cache_condition'],
        'dst': options['dst'],
        'ignore_if_set': options['ignore_if_set'],
        'name': options['name'],
        'priority': options['priority'],
        'regex': options['regex'],
        'request_condition': options['request_condition'],
        'response_condition': options['response_condition'],
        'src': options['src'],
        'substitution': options['substitution'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _HeaderResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/header/{header_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Modifies an existing Header object by name.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.header_name
     * @param {module:model/String} [options.action] - Accepts a string value.
     * @param {String} [options.cache_condition] - Name of the cache condition controlling when this configuration applies.
     * @param {String} [options.dst] - Header to set.
     * @param {Number} [options.ignore_if_set] - Don't add the header if it is added already. Only applies to 'set' action.
     * @param {String} [options.name] - A handle to refer to this Header object.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @param {String} [options.regex] - Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
     * @param {String} [options.request_condition] - Condition which, if met, will select this configuration during a request. Optional.
     * @param {String} [options.response_condition]
     * @param {String} [options.src] - Variable to be used as a source for the header content. Does not apply to `delete` action.
     * @param {String} [options.substitution] - Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
     * @param {module:model/String} [options.type] - Accepts a string value.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeaderResponse}
     */

  }, {
    key: "updateHeaderObject",
    value: function updateHeaderObject() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateHeaderObjectWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return HeaderApi;
}();

exports["default"] = HeaderApi;