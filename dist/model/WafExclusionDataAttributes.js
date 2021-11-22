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
 * The WafExclusionDataAttributes model module.
 * @module model/WafExclusionDataAttributes
 * @version 3.0.0-alpha1
 */
var WafExclusionDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionDataAttributes</code>.
   * @alias module:model/WafExclusionDataAttributes
   */
  function WafExclusionDataAttributes() {
    _classCallCheck(this, WafExclusionDataAttributes);

    WafExclusionDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafExclusionDataAttributes} The populated <code>WafExclusionDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionDataAttributes();

        if (data.hasOwnProperty('condition')) {
          obj['condition'] = _ApiClient["default"].convertToType(data['condition'], 'String');
        }

        if (data.hasOwnProperty('exclusion_type')) {
          obj['exclusion_type'] = _ApiClient["default"].convertToType(data['exclusion_type'], 'String');
        }

        if (data.hasOwnProperty('logging')) {
          obj['logging'] = _ApiClient["default"].convertToType(data['logging'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('variable')) {
          obj['variable'] = _ApiClient["default"].convertToType(data['variable'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WafExclusionDataAttributes;
}();
/**
 * A conditional expression in VCL used to determine if the condition is met.
 * @member {String} condition
 */


WafExclusionDataAttributes.prototype['condition'] = undefined;
/**
 * The type of exclusion.
 * @member {module:model/WafExclusionDataAttributes.ExclusionTypeEnum} exclusion_type
 */

WafExclusionDataAttributes.prototype['exclusion_type'] = undefined;
/**
 * Whether to generate a log upon matching.
 * @member {Boolean} logging
 * @default true
 */

WafExclusionDataAttributes.prototype['logging'] = true;
/**
 * Name of the exclusion.
 * @member {String} name
 */

WafExclusionDataAttributes.prototype['name'] = undefined;
/**
 * A numeric ID identifying a WAF exclusion.
 * @member {Number} number
 */

WafExclusionDataAttributes.prototype['number'] = undefined;
/**
 * The variable to exclude. An optional selector can be specified after the variable separated by a colon (`:`) to restrict the variable to a particular parameter. Required for `exclusion_type=variable`.
 * @member {module:model/WafExclusionDataAttributes.VariableEnum} variable
 */

WafExclusionDataAttributes.prototype['variable'] = undefined;
/**
 * Allowed values for the <code>exclusion_type</code> property.
 * @enum {String}
 * @readonly
 */

WafExclusionDataAttributes['ExclusionTypeEnum'] = {
  /**
   * value: "rule"
   * @const
   */
  "rule": "rule",

  /**
   * value: "variable"
   * @const
   */
  "variable": "variable",

  /**
   * value: "waf"
   * @const
   */
  "waf": "waf"
};
/**
 * Allowed values for the <code>variable</code> property.
 * @enum {String}
 * @readonly
 */

WafExclusionDataAttributes['VariableEnum'] = {
  /**
   * value: "req.cookies"
   * @const
   */
  "req.cookies": "req.cookies",

  /**
   * value: "req.headers"
   * @const
   */
  "req.headers": "req.headers",

  /**
   * value: "req.post"
   * @const
   */
  "req.post": "req.post",

  /**
   * value: "req.post_filename"
   * @const
   */
  "req.post_filename": "req.post_filename",

  /**
   * value: "req.qs"
   * @const
   */
  "req.qs": "req.qs",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
var _default = WafExclusionDataAttributes;
exports["default"] = _default;