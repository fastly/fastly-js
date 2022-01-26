"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasResponseObject = _interopRequireDefault(require("./SchemasResponseObject"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasResponseObjectResponse model module.
 * @module model/SchemasResponseObjectResponse
 * @version 3.0.0-alpha1
 */
var SchemasResponseObjectResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasResponseObjectResponse</code>.
   * @alias module:model/SchemasResponseObjectResponse
   * @implements module:model/SchemasResponseObject
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function SchemasResponseObjectResponse() {
    _classCallCheck(this, SchemasResponseObjectResponse);

    _SchemasResponseObject["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    SchemasResponseObjectResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasResponseObjectResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasResponseObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasResponseObjectResponse} obj Optional instance to populate.
     * @return {module:model/SchemasResponseObjectResponse} The populated <code>SchemasResponseObjectResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasResponseObjectResponse();

        _SchemasResponseObject["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('cache_condition')) {
          obj['cache_condition'] = _ApiClient["default"].convertToType(data['cache_condition'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], 'String');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SchemasResponseObjectResponse;
}();
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */


SchemasResponseObjectResponse.prototype['cache_condition'] = undefined;
/**
 * The content to deliver for the response object, can be empty.
 * @member {String} content
 */

SchemasResponseObjectResponse.prototype['content'] = undefined;
/**
 * The MIME type of the content, can be empty.
 * @member {String} content_type
 */

SchemasResponseObjectResponse.prototype['content_type'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

SchemasResponseObjectResponse.prototype['name'] = undefined;
/**
 * The HTTP status code.
 * @member {Number} status
 * @default 200
 */

SchemasResponseObjectResponse.prototype['status'] = 200;
/**
 * The HTTP response.
 * @member {String} response
 * @default 'Ok'
 */

SchemasResponseObjectResponse.prototype['response'] = 'Ok';
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

SchemasResponseObjectResponse.prototype['request_condition'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SchemasResponseObjectResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

SchemasResponseObjectResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

SchemasResponseObjectResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

SchemasResponseObjectResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

SchemasResponseObjectResponse.prototype['updated_at'] = undefined; // Implement SchemasResponseObject interface:

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

_SchemasResponseObject["default"].prototype['cache_condition'] = undefined;
/**
 * The content to deliver for the response object, can be empty.
 * @member {String} content
 */

_SchemasResponseObject["default"].prototype['content'] = undefined;
/**
 * The MIME type of the content, can be empty.
 * @member {String} content_type
 */

_SchemasResponseObject["default"].prototype['content_type'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

_SchemasResponseObject["default"].prototype['name'] = undefined;
/**
 * The HTTP status code.
 * @member {Number} status
 * @default 200
 */

_SchemasResponseObject["default"].prototype['status'] = 200;
/**
 * The HTTP response.
 * @member {String} response
 * @default 'Ok'
 */

_SchemasResponseObject["default"].prototype['response'] = 'Ok';
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

_SchemasResponseObject["default"].prototype['request_condition'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined;
var _default = SchemasResponseObjectResponse;
exports["default"] = _default;