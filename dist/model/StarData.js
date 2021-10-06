"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipUser = _interopRequireDefault(require("./RelationshipUser"));

var _TypeStar = _interopRequireDefault(require("./TypeStar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StarData model module.
 * @module model/StarData
 * @version 3.0.0-alpha1
 */
var StarData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StarData</code>.
   * @alias module:model/StarData
   */
  function StarData() {
    _classCallCheck(this, StarData);

    StarData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StarData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StarData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StarData} obj Optional instance to populate.
     * @return {module:model/StarData} The populated <code>StarData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StarData();

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], _RelationshipUser["default"]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeStar["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return StarData;
}();
/**
 * @member {module:model/RelationshipUser} relationships
 */


StarData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeStar} type
 */

StarData.prototype['type'] = undefined;
var _default = StarData;
exports["default"] = _default;