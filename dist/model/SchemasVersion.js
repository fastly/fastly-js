"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasVersion model module.
 * @module model/SchemasVersion
 * @version 3.0.0-alpha1
 */
var SchemasVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasVersion</code>.
   * @alias module:model/SchemasVersion
   */
  function SchemasVersion() {
    _classCallCheck(this, SchemasVersion);

    SchemasVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasVersion} obj Optional instance to populate.
     * @return {module:model/SchemasVersion} The populated <code>SchemasVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasVersion();

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
      }

      return obj;
    }
  }]);

  return SchemasVersion;
}();
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */


SchemasVersion.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

SchemasVersion.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */

SchemasVersion.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */

SchemasVersion.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */

SchemasVersion.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */

SchemasVersion.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */

SchemasVersion.prototype['testing'] = false;
var _default = SchemasVersion;
exports["default"] = _default;