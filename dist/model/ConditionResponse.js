"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Condition = _interopRequireDefault(require("./Condition"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConditionResponse model module.
 * @module model/ConditionResponse
 * @version 3.0.0-alpha1
 */
var ConditionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConditionResponse</code>.
   * @alias module:model/ConditionResponse
   * @implements module:model/Condition
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function ConditionResponse() {
    _classCallCheck(this, ConditionResponse);

    _Condition["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    ConditionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConditionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConditionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConditionResponse} obj Optional instance to populate.
     * @return {module:model/ConditionResponse} The populated <code>ConditionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConditionResponse();

        _Condition["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }

        if (data.hasOwnProperty('statement')) {
          obj['statement'] = _ApiClient["default"].convertToType(data['statement'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
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

  return ConditionResponse;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


ConditionResponse.prototype['comment'] = undefined;
/**
 * Name of the condition. Required.
 * @member {String} name
 */

ConditionResponse.prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

ConditionResponse.prototype['priority'] = 100;
/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} statement
 */

ConditionResponse.prototype['statement'] = undefined;
/**
 * Type of the condition. Required.
 * @member {module:model/ConditionResponse.TypeEnum} type
 */

ConditionResponse.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

ConditionResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

ConditionResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

ConditionResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

ConditionResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

ConditionResponse.prototype['updated_at'] = undefined; // Implement Condition interface:

/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_Condition["default"].prototype['comment'] = undefined;
/**
 * Name of the condition. Required.
 * @member {String} name
 */

_Condition["default"].prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

_Condition["default"].prototype['priority'] = 100;
/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} statement
 */

_Condition["default"].prototype['statement'] = undefined;
/**
 * Type of the condition. Required.
 * @member {module:model/Condition.TypeEnum} type
 */

_Condition["default"].prototype['type'] = undefined; // Implement ServiceIdAndVersion interface:

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
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ConditionResponse['TypeEnum'] = {
  /**
   * value: "REQUEST"
   * @const
   */
  "REQUEST": "REQUEST",

  /**
   * value: "CACHE"
   * @const
   */
  "CACHE": "CACHE",

  /**
   * value: "RESPONSE"
   * @const
   */
  "RESPONSE": "RESPONSE",

  /**
   * value: "PREFETCH"
   * @const
   */
  "PREFETCH": "PREFETCH"
};
var _default = ConditionResponse;
exports["default"] = _default;