"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafFirewallVersion = _interopRequireDefault(require("./TypeWafFirewallVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberWafFirewallVersion model module.
 * @module model/RelationshipMemberWafFirewallVersion
 * @version 3.0.0-alpha1
 */
var RelationshipMemberWafFirewallVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberWafFirewallVersion</code>.
   * @alias module:model/RelationshipMemberWafFirewallVersion
   */
  function RelationshipMemberWafFirewallVersion() {
    _classCallCheck(this, RelationshipMemberWafFirewallVersion);

    RelationshipMemberWafFirewallVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberWafFirewallVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberWafFirewallVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberWafFirewallVersion} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberWafFirewallVersion} The populated <code>RelationshipMemberWafFirewallVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberWafFirewallVersion();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafFirewallVersion["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberWafFirewallVersion;
}();
/**
 * Alphanumeric string identifying a Firewall version.
 * @member {String} id
 */


RelationshipMemberWafFirewallVersion.prototype['id'] = undefined;
/**
 * @member {module:model/TypeWafFirewallVersion} type
 */

RelationshipMemberWafFirewallVersion.prototype['type'] = undefined;
var _default = RelationshipMemberWafFirewallVersion;
exports["default"] = _default;