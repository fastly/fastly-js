"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasVersion = _interopRequireDefault(require("./SchemasVersion"));

var _SchemasVersionResponseAllOf = _interopRequireDefault(require("./SchemasVersionResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasVersionResponse model module.
 * @module model/SchemasVersionResponse
 * @version 3.0.0-alpha1
 */
var SchemasVersionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasVersionResponse</code>.
   * @alias module:model/SchemasVersionResponse
   */
  function SchemasVersionResponse() {
    _classCallCheck(this, SchemasVersionResponse);

    SchemasVersionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasVersionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasVersionResponse} obj Optional instance to populate.
     * @return {module:model/SchemasVersionResponse} The populated <code>SchemasVersionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasVersionResponse();

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

  return SchemasVersionResponse;
}();
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */


SchemasVersionResponse.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

SchemasVersionResponse.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */

SchemasVersionResponse.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */

SchemasVersionResponse.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */

SchemasVersionResponse.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */

SchemasVersionResponse.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */

SchemasVersionResponse.prototype['testing'] = false;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

SchemasVersionResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

SchemasVersionResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

SchemasVersionResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SchemasVersionResponse.prototype['service_id'] = undefined;
var _default = SchemasVersionResponse;
exports["default"] = _default;