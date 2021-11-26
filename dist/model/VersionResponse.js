"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _Version = _interopRequireDefault(require("./Version"));

var _VersionResponseAllOf = _interopRequireDefault(require("./VersionResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VersionResponse model module.
 * @module model/VersionResponse
 * @version 3.0.0-alpha1
 */
var VersionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionResponse</code>.
   * @alias module:model/VersionResponse
   * @implements module:model/Version
   * @implements module:model/Timestamps
   * @implements module:model/VersionResponseAllOf
   */
  function VersionResponse() {
    _classCallCheck(this, VersionResponse);

    _Version["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _VersionResponseAllOf["default"].initialize(this);

    VersionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionResponse} obj Optional instance to populate.
     * @return {module:model/VersionResponse} The populated <code>VersionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionResponse();

        _Version["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        _VersionResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('deployed')) {
          obj['deployed'] = _ApiClient["default"].convertToType(data['deployed'], 'Boolean');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('staging')) {
          obj['staging'] = _ApiClient["default"].convertToType(data['staging'], 'Boolean');
        }

        if (data.hasOwnProperty('testing')) {
          obj['testing'] = _ApiClient["default"].convertToType(data['testing'], 'Boolean');
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

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VersionResponse;
}();
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */


VersionResponse.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

VersionResponse.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */

VersionResponse.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */

VersionResponse.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */

VersionResponse.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */

VersionResponse.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */

VersionResponse.prototype['testing'] = false;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

VersionResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

VersionResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

VersionResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

VersionResponse.prototype['service_id'] = undefined; // Implement Version interface:

/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */

_Version["default"].prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_Version["default"].prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */

_Version["default"].prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */

_Version["default"].prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */

_Version["default"].prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */

_Version["default"].prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */

_Version["default"].prototype['testing'] = false; // Implement Timestamps interface:

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

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement VersionResponseAllOf interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_VersionResponseAllOf["default"].prototype['service_id'] = undefined;
var _default = VersionResponse;
exports["default"] = _default;