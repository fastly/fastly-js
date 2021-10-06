"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SnippetResponse = _interopRequireDefault(require("../model/SnippetResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Snippet service.
* @module api/SnippetApi
* @version 3.0.0-alpha1
*/
var SnippetApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SnippetApi. 
  * @alias module:api/SnippetApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SnippetApi(apiClient) {
    _classCallCheck(this, SnippetApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a snippet for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
   * @param {module:model/String} [options.dynamic] - Sets the snippet version.
   * @param {String} [options.name] - The name for the snippet.
   * @param {String} [options.priority='100'] - Numeric string value. Priority determines execution order. Lower numbers execute first.
   * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
   */


  _createClass(SnippetApi, [{
    key: "createSnippetWithHttpInfo",
    value: function createSnippetWithHttpInfo() {
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
        'content': options['content'],
        'dynamic': options['dynamic'],
        'name': options['name'],
        'priority': options['priority'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _SnippetResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/snippet', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {module:model/String} [options.dynamic] - Sets the snippet version.
     * @param {String} [options.name] - The name for the snippet.
     * @param {String} [options.priority='100'] - Numeric string value. Priority determines execution order. Lower numbers execute first.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */

  }, {
    key: "createSnippet",
    value: function createSnippet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createSnippetWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a specific snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.snippet_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteSnippetWithHttpInfo",
    value: function deleteSnippetWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'snippet_name' is set.


      if (options['snippet_name'] === undefined || options['snippet_name'] === null) {
        throw new Error("Missing the required parameter 'snippet_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'snippet_name': options['snippet_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/snippet/{snippet_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a specific snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.snippet_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteSnippet",
    value: function deleteSnippet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteSnippetWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a single snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.snippet_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */

  }, {
    key: "getSnippetWithHttpInfo",
    value: function getSnippetWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'snippet_name' is set.


      if (options['snippet_name'] === undefined || options['snippet_name'] === null) {
        throw new Error("Missing the required parameter 'snippet_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'snippet_name': options['snippet_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SnippetResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/snippet/{snippet_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a single snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.snippet_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */

  }, {
    key: "getSnippet",
    value: function getSnippet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getSnippetWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a single dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.snippet_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */

  }, {
    key: "getSnippetDynamicWithHttpInfo",
    value: function getSnippetDynamicWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'snippet_id' is set.


      if (options['snippet_id'] === undefined || options['snippet_id'] === null) {
        throw new Error("Missing the required parameter 'snippet_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'snippet_id': options['snippet_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SnippetResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/snippet/{snippet_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a single dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.snippet_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */

  }, {
    key: "getSnippetDynamic",
    value: function getSnippetDynamic() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getSnippetDynamicWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all snippets for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SnippetResponse>} and HTTP response
     */

  }, {
    key: "listSnippetsWithHttpInfo",
    value: function listSnippetsWithHttpInfo() {
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
      var returnType = [_SnippetResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/snippet', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all snippets for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SnippetResponse>}
     */

  }, {
    key: "listSnippets",
    value: function listSnippets() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listSnippetsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a specific snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.snippet_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */

  }, {
    key: "updateSnippetWithHttpInfo",
    value: function updateSnippetWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'snippet_name' is set.


      if (options['snippet_name'] === undefined || options['snippet_name'] === null) {
        throw new Error("Missing the required parameter 'snippet_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'snippet_name': options['snippet_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _SnippetResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/snippet/{snippet_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a specific snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.snippet_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */

  }, {
    key: "updateSnippet",
    value: function updateSnippet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateSnippetWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.snippet_id
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {module:model/String} [options.dynamic] - Sets the snippet version.
     * @param {String} [options.name] - The name for the snippet.
     * @param {String} [options.priority='100'] - Numeric string value. Priority determines execution order. Lower numbers execute first.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */

  }, {
    key: "updateSnippetDynamicWithHttpInfo",
    value: function updateSnippetDynamicWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'snippet_id' is set.


      if (options['snippet_id'] === undefined || options['snippet_id'] === null) {
        throw new Error("Missing the required parameter 'snippet_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'snippet_id': options['snippet_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'content': options['content'],
        'dynamic': options['dynamic'],
        'name': options['name'],
        'priority': options['priority'],
        'type': options['type']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _SnippetResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/snippet/{snippet_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {String} options.snippet_id
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {module:model/String} [options.dynamic] - Sets the snippet version.
     * @param {String} [options.name] - The name for the snippet.
     * @param {String} [options.priority='100'] - Numeric string value. Priority determines execution order. Lower numbers execute first.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */

  }, {
    key: "updateSnippetDynamic",
    value: function updateSnippetDynamic() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateSnippetDynamicWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SnippetApi;
}();

exports["default"] = SnippetApi;