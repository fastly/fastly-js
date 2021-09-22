"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvitationResponseData = _interopRequireDefault(require("./InvitationResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationsResponseAllOf model module.
 * @module model/InvitationsResponseAllOf
 * @version 3.0.0-alpha1
 */
var InvitationsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationsResponseAllOf</code>.
   * @alias module:model/InvitationsResponseAllOf
   */
  function InvitationsResponseAllOf() {
    _classCallCheck(this, InvitationsResponseAllOf);

    InvitationsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/InvitationsResponseAllOf} The populated <code>InvitationsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_InvitationResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InvitationsResponseAllOf;
}();
/**
 * @member {Array.<module:model/InvitationResponseData>} data
 */


InvitationsResponseAllOf.prototype['data'] = undefined;
var _default = InvitationsResponseAllOf;
exports["default"] = _default;