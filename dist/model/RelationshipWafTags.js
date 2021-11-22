"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafTagsWafTags = _interopRequireDefault(require("./RelationshipWafTagsWafTags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafTags model module.
 * @module model/RelationshipWafTags
 * @version 3.0.0-alpha1
 */
var RelationshipWafTags = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafTags</code>.
   * @alias module:model/RelationshipWafTags
   */
  function RelationshipWafTags() {
    _classCallCheck(this, RelationshipWafTags);

    RelationshipWafTags.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafTags, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafTags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafTags} obj Optional instance to populate.
     * @return {module:model/RelationshipWafTags} The populated <code>RelationshipWafTags</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafTags();

        if (data.hasOwnProperty('waf_tags')) {
          obj['waf_tags'] = _RelationshipWafTagsWafTags["default"].constructFromObject(data['waf_tags']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafTags;
}();
/**
 * @member {module:model/RelationshipWafTagsWafTags} waf_tags
 */


RelationshipWafTags.prototype['waf_tags'] = undefined;
var _default = RelationshipWafTags;
exports["default"] = _default;