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
 * The VclDiff model module.
 * @module model/VclDiff
 * @version 3.0.0-alpha1
 */
var VclDiff = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VclDiff</code>.
   * @alias module:model/VclDiff
   */
  function VclDiff() {
    _classCallCheck(this, VclDiff);

    VclDiff.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VclDiff, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VclDiff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VclDiff} obj Optional instance to populate.
     * @return {module:model/VclDiff} The populated <code>VclDiff</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VclDiff();

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'Number');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'Number');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('diff')) {
          obj['diff'] = _ApiClient["default"].convertToType(data['diff'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VclDiff;
}();
/**
 * The version number of the service to which changes in the generated VCL are being compared.
 * @member {Number} from
 */


VclDiff.prototype['from'] = undefined;
/**
 * The version number of the service from which changes in the generated VCL are being compared.
 * @member {Number} to
 */

VclDiff.prototype['to'] = undefined;
/**
 * The format in which compared VCL changes are being returned in.
 * @member {module:model/VclDiff.FormatEnum} format
 */

VclDiff.prototype['format'] = undefined;
/**
 * The differences between two specified versions.
 * @member {String} diff
 */

VclDiff.prototype['diff'] = undefined;
/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */

VclDiff['FormatEnum'] = {
  /**
   * value: "text"
   * @const
   */
  "text": "text",

  /**
   * value: "html"
   * @const
   */
  "html": "html",

  /**
   * value: "html_simple"
   * @const
   */
  "html_simple": "html_simple"
};
var _default = VclDiff;
exports["default"] = _default;