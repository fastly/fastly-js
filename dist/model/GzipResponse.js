"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Gzip = _interopRequireDefault(require("./Gzip"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GzipResponse model module.
 * @module model/GzipResponse
 * @version 3.0.0-alpha1
 */
var GzipResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GzipResponse</code>.
   * @alias module:model/GzipResponse
   * @implements module:model/Gzip
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function GzipResponse() {
    _classCallCheck(this, GzipResponse);

    _Gzip["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    GzipResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GzipResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GzipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GzipResponse} obj Optional instance to populate.
     * @return {module:model/GzipResponse} The populated <code>GzipResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GzipResponse();

        _Gzip["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('cache_condition')) {
          obj['cache_condition'] = _ApiClient["default"].convertToType(data['cache_condition'], 'String');
        }

        if (data.hasOwnProperty('content_types')) {
          obj['content_types'] = _ApiClient["default"].convertToType(data['content_types'], 'String');
        }

        if (data.hasOwnProperty('extensions')) {
          obj['extensions'] = _ApiClient["default"].convertToType(data['extensions'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
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

  return GzipResponse;
}();
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */


GzipResponse.prototype['cache_condition'] = undefined;
/**
 * Space-separated list of content types to compress. If you omit this field a default list will be used.
 * @member {String} content_types
 */

GzipResponse.prototype['content_types'] = undefined;
/**
 * Space-separated list of file extensions to compress. If you omit this field a default list will be used.
 * @member {String} extensions
 */

GzipResponse.prototype['extensions'] = undefined;
/**
 * Name of the gzip configuration.
 * @member {String} name
 */

GzipResponse.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

GzipResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

GzipResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

GzipResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

GzipResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

GzipResponse.prototype['updated_at'] = undefined; // Implement Gzip interface:

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

_Gzip["default"].prototype['cache_condition'] = undefined;
/**
 * Space-separated list of content types to compress. If you omit this field a default list will be used.
 * @member {String} content_types
 */

_Gzip["default"].prototype['content_types'] = undefined;
/**
 * Space-separated list of file extensions to compress. If you omit this field a default list will be used.
 * @member {String} extensions
 */

_Gzip["default"].prototype['extensions'] = undefined;
/**
 * Name of the gzip configuration.
 * @member {String} name
 */

_Gzip["default"].prototype['name'] = undefined; // Implement ServiceIdAndVersion interface:

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
var _default = GzipResponse;
exports["default"] = _default;