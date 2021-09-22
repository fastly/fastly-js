"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasRelationshipsForWafActiveRule = _interopRequireDefault(require("./SchemasRelationshipsForWafActiveRule"));

var _SchemasWafActiveRuleDataAttributes = _interopRequireDefault(require("./SchemasWafActiveRuleDataAttributes"));

var _TypeWafActiveRule = _interopRequireDefault(require("./TypeWafActiveRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasWafActiveRuleData model module.
 * @module model/SchemasWafActiveRuleData
 * @version 3.0.0-alpha1
 */
var SchemasWafActiveRuleData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasWafActiveRuleData</code>.
   * @alias module:model/SchemasWafActiveRuleData
   */
  function SchemasWafActiveRuleData() {
    _classCallCheck(this, SchemasWafActiveRuleData);

    SchemasWafActiveRuleData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasWafActiveRuleData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasWafActiveRuleData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasWafActiveRuleData} obj Optional instance to populate.
     * @return {module:model/SchemasWafActiveRuleData} The populated <code>SchemasWafActiveRuleData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasWafActiveRuleData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _SchemasWafActiveRuleDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _SchemasRelationshipsForWafActiveRule["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafActiveRule["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return SchemasWafActiveRuleData;
}();
/**
 * @member {module:model/SchemasWafActiveRuleDataAttributes} attributes
 */


SchemasWafActiveRuleData.prototype['attributes'] = undefined;
/**
 * @member {module:model/SchemasRelationshipsForWafActiveRule} relationships
 */

SchemasWafActiveRuleData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeWafActiveRule} type
 */

SchemasWafActiveRuleData.prototype['type'] = undefined;
var _default = SchemasWafActiveRuleData;
exports["default"] = _default;