"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForWafExclusion = _interopRequireDefault(require("./RelationshipsForWafExclusion"));

var _TypeWafExclusion = _interopRequireDefault(require("./TypeWafExclusion"));

var _WafExclusionDataAttributes = _interopRequireDefault(require("./WafExclusionDataAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafExclusionData model module.
 * @module model/WafExclusionData
 * @version 3.0.0-alpha1
 */
var WafExclusionData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionData</code>.
   * @alias module:model/WafExclusionData
   */
  function WafExclusionData() {
    _classCallCheck(this, WafExclusionData);

    WafExclusionData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionData} obj Optional instance to populate.
     * @return {module:model/WafExclusionData} The populated <code>WafExclusionData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafExclusionDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForWafExclusion["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafExclusion["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return WafExclusionData;
}();
/**
 * @member {module:model/WafExclusionDataAttributes} attributes
 */


WafExclusionData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForWafExclusion} relationships
 */

WafExclusionData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeWafExclusion} type
 */

WafExclusionData.prototype['type'] = undefined;
var _default = WafExclusionData;
exports["default"] = _default;