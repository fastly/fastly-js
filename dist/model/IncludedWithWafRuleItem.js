"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafRuleRevision = _interopRequireDefault(require("./TypeWafRuleRevision"));

var _WafRuleRevision = _interopRequireDefault(require("./WafRuleRevision"));

var _WafRuleRevisionAttributes = _interopRequireDefault(require("./WafRuleRevisionAttributes"));

var _WafTag = _interopRequireDefault(require("./WafTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IncludedWithWafRuleItem model module.
 * @module model/IncludedWithWafRuleItem
 * @version 3.0.0-alpha1
 */
var IncludedWithWafRuleItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedWithWafRuleItem</code>.
   * @alias module:model/IncludedWithWafRuleItem
   * @implements module:model/WafTag
   * @implements module:model/WafRuleRevision
   */
  function IncludedWithWafRuleItem() {
    _classCallCheck(this, IncludedWithWafRuleItem);

    _WafTag["default"].initialize(this);

    _WafRuleRevision["default"].initialize(this);

    IncludedWithWafRuleItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IncludedWithWafRuleItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IncludedWithWafRuleItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncludedWithWafRuleItem} obj Optional instance to populate.
     * @return {module:model/IncludedWithWafRuleItem} The populated <code>IncludedWithWafRuleItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedWithWafRuleItem();

        _WafTag["default"].constructFromObject(data, obj);

        _WafRuleRevision["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRuleRevision["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafRuleRevisionAttributes["default"].constructFromObject(data['attributes']);
        }
      }

      return obj;
    }
  }]);

  return IncludedWithWafRuleItem;
}();
/**
 * @member {module:model/TypeWafRuleRevision} type
 */


IncludedWithWafRuleItem.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

IncludedWithWafRuleItem.prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */

IncludedWithWafRuleItem.prototype['attributes'] = undefined; // Implement WafTag interface:

/**
 * @member {module:model/TypeWafTag} type
 */

_WafTag["default"].prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF tag.
 * @member {String} id
 */

_WafTag["default"].prototype['id'] = undefined;
/**
 * @member {module:model/WafTagAttributes} attributes
 */

_WafTag["default"].prototype['attributes'] = undefined; // Implement WafRuleRevision interface:

/**
 * @member {module:model/TypeWafRuleRevision} type
 */

_WafRuleRevision["default"].prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

_WafRuleRevision["default"].prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */

_WafRuleRevision["default"].prototype['attributes'] = undefined;
var _default = IncludedWithWafRuleItem;
exports["default"] = _default;