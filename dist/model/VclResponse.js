"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _Vcl = _interopRequireDefault(require("./Vcl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VclResponse model module.
 * @module model/VclResponse
 * @version 3.0.0-alpha1
 */
var VclResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VclResponse</code>.
   * @alias module:model/VclResponse
   * @implements module:model/Vcl
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function VclResponse() {
    _classCallCheck(this, VclResponse);

    _Vcl["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    VclResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VclResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VclResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VclResponse} obj Optional instance to populate.
     * @return {module:model/VclResponse} The populated <code>VclResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VclResponse();

        _Vcl["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('main')) {
          obj['main'] = _ApiClient["default"].convertToType(data['main'], 'Boolean');
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

  return VclResponse;
}();
/**
 * The VCL code to be included.
 * @member {String} content
 */


VclResponse.prototype['content'] = undefined;
/**
 * Set to `true` when this is the main VCL, otherwise `false`.
 * @member {Boolean} main
 */

VclResponse.prototype['main'] = undefined;
/**
 * The name of this VCL.
 * @member {String} name
 */

VclResponse.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

VclResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

VclResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

VclResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

VclResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

VclResponse.prototype['updated_at'] = undefined; // Implement Vcl interface:

/**
 * The VCL code to be included.
 * @member {String} content
 */

_Vcl["default"].prototype['content'] = undefined;
/**
 * Set to `true` when this is the main VCL, otherwise `false`.
 * @member {Boolean} main
 */

_Vcl["default"].prototype['main'] = undefined;
/**
 * The name of this VCL.
 * @member {String} name
 */

_Vcl["default"].prototype['name'] = undefined; // Implement ServiceIdAndVersion interface:

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
var _default = VclResponse;
exports["default"] = _default;